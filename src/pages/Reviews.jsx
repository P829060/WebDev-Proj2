import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Card, Row, Col, Container } from 'react-bootstrap';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          throw new Error("Data is not an array");
        }
      })
      .catch(err => {
        console.error("Error fetching reviews:", err);
        setError("Could not load reviews.");
      });
  }, []);

  return (
    <>
      {/* ✅ Tailwind CDN (for layout) */}
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white px-4 md:px-8 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Fan Reviews</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <Container fluid>
          <Row className="g-4">
            {reviews.map((review, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                <Card
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  className="h-100"
                >
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Subtitle className="mb-2" style={{ color: '#fff' }}>
                      {review.email} • {review.contact}
                    </Card.Subtitle>
                    <Card.Text className="fst-italic mb-2">Fav: {review.footballer}</Card.Text>
                    <Card.Text>{review.comments}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
