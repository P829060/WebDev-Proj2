import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Modal } from "react-bootstrap";

const footballers = [
  {
    rank: 1,
    name: "Lionel Messi",
    country: "🇦🇷 Argentina",
    img: "https://2.bp.blogspot.com/-Wj1IEtdz9Pg/UQSFEhcDQtI/AAAAAAAAAY8/cIeSH2SMXxY/s1600/messi+photo+2013+(5).jpg",
    description: "Unmatched dribbling, vision, and creativity. Regarded by many as the greatest of all time.",
    quote: "The best decisions aren't made with your mind, but with your instinct.",
    stats: {
      appearances: 1045,
      goals: 821,
      assists: 361,
      honors: "8x Ballon d'Or, 4x UCL, Copa America 2021, World Cup 2022",
      clubs: "Barcelona, PSG, Inter Miami"
    }
  },
  {
    rank: 2,
    name: "Cristiano Ronaldo",
    country: "🇵🇹 Portugal",
    img: "https://www.stadiumrant.com/wp-content/uploads/2025/02/cristiano-ronaldo-of-al-nassr-looks-on-as-he-lines-up-prior-news-photo-1707422901-1-1024x683.jpg",
    description: "Power, longevity, and relentless scoring across every major league.",
    quote: "Your love makes me strong, your hate makes me unstoppable.",
    stats: {
      appearances: 1200,
      goals: 879,
      assists: 247,
      honors: "5x Ballon d'Or, 5x UCL, Euro 2016",
      clubs: "Man United, Real Madrid, Juventus, Al-Nassr"
    }
  },
  {
    rank: 3,
    name: "Pelé",
    country: "🇧🇷 Brazil",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/221230141332-01-pele-new-york-cosmos.jpg?c=original",
    description: "The original icon. Won three World Cups before turning 30.",
    quote: "Success is no accident. It is hard work, perseverance, and love of what you are doing.",
    stats: {
      appearances: 1363,
      goals: 1279,
      assists: "N/A",
      honors: "3x World Cup Champion",
      clubs: "Santos, New York Cosmos"
    }
  },
  {
    rank: 4,
    name: "Diego Maradona",
    country: "🇦🇷 Argentina",
    img: "https://www.fcbarcelona.com/photo-resources/2019/12/16/0297bc9e-3c14-4bdc-b7e8-92fa813b69c3/2635_01_24.jpg?width=1200&height=750",
    description: "Magician with the ball, immortalized by the 'Hand of God' and solo World Cup run.",
    quote: "When people succeed, it is because of hard work. Luck has nothing to do with success.",
    stats: {
      appearances: 678,
      goals: 312,
      assists: 159,
      honors: "World Cup 1986, Serie A titles with Napoli",
      clubs: "Napoli, Barcelona, Boca Juniors"
    }
  },
  {
    rank: 5,
    name: "Zinedine Zidane",
    country: "🇫🇷 France",
    img: "https://talksport.com/wp-content/uploads/sites/5/2025/01/0cb106a0-e01a-42d8-a289-943e299e9bed.jpg?strip=all&w=960",
    description: "Midfield maestro, famed for finesse and World Cup glory. Dominated as both player and coach.",
    quote: "I have a need to play intensely every day, to fight every match hard.",
    stats: {
      appearances: 789,
      goals: 126,
      assists: 169,
      honors: "World Cup 1998, Euro 2000, UCL (as coach)",
      clubs: "Juventus, Real Madrid"
    }
  },
  {
    rank: 6,
    name: "Ronaldinho",
    country: "🇧🇷 Brazil",
    img: "https://static.wixstatic.com/media/de448a_f66d0b7605dc44c791a15c68481bacdf~mv2.jpg",
    description: "The smile of football. Inspired a generation with flair, joy, and pure creativity.",
    quote: "I learned all about life with a ball at my feet.",
    stats: {
      appearances: 743,
      goals: 280,
      assists: 218,
      honors: "Ballon d'Or 2005, World Cup 2002, UCL 2006",
      clubs: "Barcelona, Milan, PSG"
    }
  },
  {
    rank: 7,
    name: "Johan Cruyff",
    country: "🇳🇱 Netherlands",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Johan_Cruyff_1974c.jpg/330px-Johan_Cruyff_1974c.jpg",
    description: "The visionary of Total Football. Changed the game as player and coach.",
    quote: "Playing football is very simple, but playing simple football is the hardest thing there is.",
    stats: {
      appearances: 714,
      goals: 336,
      assists: 188,
      honors: "3x Ballon d'Or, 3x European Cups",
      clubs: "Ajax, Barcelona"
    }
  },
  {
    rank: 8,
    name: "Franz Beckenbauer",
    country: "🇩🇪 Germany",
    img: "https://cdn.shopify.com/s/files/1/2981/7458/files/15679410779361_640x0_42729874-5fb6-48cd-8efd-cb6338d401a0_480x480.jpg?v=1696516458",
    description: "Redefined defending. One of the few to win the World Cup as both player and manager.",
    quote: "The coach is the team’s boss, no matter what. That’s what keeps the team together.",
    stats: {
      appearances: 754,
      goals: 88,
      assists: "N/A",
      honors: "World Cup 1974, World Cup 1990 (coach)",
      clubs: "Bayern Munich, Hamburg"
    }
  },
  {
    rank: 9,
    name: "Ronaldo Nazário",
    country: "🇧🇷 Brazil",
    img: "https://external-preview.redd.it/yO12j-TWxt6Z3ynxNKAEVTeFzg6fYaEH7ZP0dOaRaUk.jpg?auto=webp&s=bea445792eccbbf76c339c71a8332cf527a7ccaf",
    description: "The Phenomenon. Blistering speed and surgical finishing made him unplayable at his peak.",
    quote: "There’s no secret. It’s just training and dedication.",
    stats: {
      appearances: 616,
      goals: 414,
      assists: 112,
      honors: "2x Ballon d'Or, World Cups 1994 & 2002",
      clubs: "Barcelona, Inter, Real Madrid"
    }
  },
  {
    rank: 10,
    name: "Michel Platini",
    country: "🇫🇷 France",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXjxfdDOsd3DdHIkeOOYNTxtQ05EgbqMBeW8BwDlSZ4xqXiSOAnZ7kfIZOtt52bS2br4&usqp=CAU",
    description: "France’s midfield maestro of the 1980s, famed for technique, vision and calm leadership.",
    quote: "To play football is very simple, but to play simple football is the hardest thing there is.",
    stats: {
      appearances: 580,
      goals: 280,
      assists: 138,
      honors: "3x Ballon d'Or, Euro 1984",
      clubs: "Nancy, Saint-Étienne, Juventus"
    }
  }
];

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPlayer: null };
  }

  openModal = (player) => {
    this.setState({ selectedPlayer: player });
  };

  closeModal = () => {
    this.setState({ selectedPlayer: null });
  };

  render() {
    const { selectedPlayer } = this.state;

    return (
      <div>
        <h1 className="merriweather">The Top 10</h1>
        <Container className="py-4">
          <div className="card-grid">
            {footballers.map((player, idx) => (
              <div key={idx} className="custom-card" onClick={() => this.openModal(player)}>
                <div className="card-flex">
                  <img src={player.img} alt={player.name} className="card-horizontal-img" />
                  <div className="card-body-flex">
                    <h4>#{player.rank} - {player.name} <span className="country">{player.country}</span></h4>
                    <> 

                    </>
                    <p className="player-highlight">{player.stats.clubs}</p>

                    <p>{player.description}</p>
                    <p>Click To Read More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>

        <Modal show={!!selectedPlayer} onHide={this.closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPlayer?.name} — #{selectedPlayer?.rank}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedPlayer?.img} alt={selectedPlayer?.name} className="img-fluid mb-3" />
            <div className="stat-group">
              <p><strong>Country:</strong> {selectedPlayer?.country}</p>
              <p><strong>Appearances:</strong> {selectedPlayer?.stats.appearances}</p>
              <p><strong>Goals:</strong> {selectedPlayer?.stats.goals}</p>
              
              <p><strong>Assists:</strong> {selectedPlayer?.stats.assists ?? "N/A"}</p>
              <p><strong>Honors:</strong> {selectedPlayer?.stats.honors}</p>
              <p><strong>Clubs:</strong> {selectedPlayer?.stats.clubs}</p>
            </div>
            <em>"{selectedPlayer?.quote}"</em>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
