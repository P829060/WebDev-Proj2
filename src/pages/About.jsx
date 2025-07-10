import React, { Component } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "./About.module.css";

const footballers = [
  {
    name: "Lionel Messi",
    img: "https://2.bp.blogspot.com/-Wj1IEtdz9Pg/UQSFEhcDQtI/AAAAAAAAAY8/cIeSH2SMXxY/s1600/messi+photo+2013+(5).jpg",
    description: "Watching Messi is like watching magic scripted in real time. He didn’t just win matches — he made football feel like poetry. 8 Ballon d'Ors, a World Cup, Champions Leagues… and yet, his humility might be greater than all his stats."
  },
  {
    name: "Cristiano Ronaldo",
    img: "https://www.stadiumrant.com/wp-content/uploads/2025/02/cristiano-ronaldo-of-al-nassr-looks-on-as-he-lines-up-prior-news-photo-1707422901-1-1024x683.jpg",
    description: "If Messi is art, Ronaldo is war. Built like a machine, driven by obsession. He conquered England, Spain, and Italy, then rewrote history for Portugal. Nobody ever wanted it more — and that hunger delivered greatness."
  },
  {
    name: "Pelé",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/221230141332-01-pele-new-york-cosmos.jpg?c=original",
    description: "Before the cameras, before the internet, there was Pelé. 17 years old, destroying teams in a World Cup final. He played like football was born in his feet — and maybe it was. Three World Cups? That says enough."
  },
  {
    name: "Diego Maradona",
    img: "https://www.fcbarcelona.com/photo-resources/2019/12/16/0297bc9e-3c14-4bdc-b7e8-92fa813b69c3/2635_01_24.jpg?width=1200&height=750",
    description: "Maradona didn’t just play football — he fought it. Raw, flawed, fearless. One moment he’s dribbling past 5 Englishmen, the next he’s changing the rules with his hand. He was chaos and brilliance rolled into one unforgettable icon."
  },
  {
    name: "Zinedine Zidane",
    img: "https://talksport.com/wp-content/uploads/sites/5/2025/01/0cb106a0-e01a-42d8-a289-943e299e9bed.jpg?strip=all&w=960",
    description: "Zizou moved like jazz on a football pitch. Calm, calculated, devastating. He never said much — his feet did the talking. And when the world needed him most? He delivered. Class is permanent, and he had it in abundance."
  },
  {
    name: "Ronaldinho",
    img: "https://static.wixstatic.com/media/de448a_f66d0b7605dc44c791a15c68481bacdf~mv2.jpg",
    description: "No one smiled like Ronaldinho when he played — and no one made us smile like him either. He danced past defenders like they weren’t real. For a few glorious years, football was fun because he made it so."
  },
  {
    name: "Johan Cruyff",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Johan_Cruyff_1974c.jpg/330px-Johan_Cruyff_1974c.jpg",
    description: "Cruyff didn’t just change the game — he reimagined it. ‘Total Football’ wasn’t just a tactic, it was a revolution. Every pass he made and every idea he coached lives on in every modern team today."
  },
  {
    name: "Franz Beckenbauer",
    img: "https://cdn.shopify.com/s/files/1/2981/7458/files/15679410779361_640x0_42729874-5fb6-48cd-8efd-cb6338d401a0_480x480.jpg?v=1696516458",
    description: "They called him ‘Der Kaiser’ for a reason. Elegant yet powerful, he made defending look graceful. And when his boots were hung, he came back in a suit and led Germany to another World Cup. A true leader, on and off the pitch."
  },
  {
    name: "Ronaldo Nazário",
    img: "https://external-preview.redd.it/yO12j-TWxt6Z3ynxNKAEVTeFzg6fYaEH7ZP0dOaRaUk.jpg?auto=webp&s=bea445792eccbbf76c339c71a8332cf527a7ccaf",
    description: "R9 was the striker that strikers still dream about. When he was fit, nobody — and I mean nobody — could stop him. Explosive, silky, and deadly in front of goal. It’s scary to think how much more he could’ve done without the injuries."
  },
  {
    name: "Michel Platini",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXjxfdDOsd3DdHIkeOOYNTxtQ05EgbqMBeW8BwDlSZ4xqXiSOAnZ7kfIZOtt52bS2br4&usqp=CAU",
    description: "Elegant, intelligent, and a born playmaker. Platini ruled the '80s with vision and style. Three Ballon d'Ors in a row don’t happen by luck — they happen when a genius plays football."
  }
];

export default class Info extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.merriweather}>
          Why These 10? Because They Defined Football
        </h1>

        <Container className="py-4">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center m-sm-4">
            {footballers.map((player, idx) => (
              <Col key={idx}>
                <Card className={`h-100 ${styles["custom-card"]}`}>
                  <Card.Img
                    variant="top"
                    src={player.img}
                    alt={player.name}
                    className={styles["card-img-top"]}
                  />
                  <Card.Body>
                    <Card.Title>{player.name}</Card.Title>
                    <p>{player.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
