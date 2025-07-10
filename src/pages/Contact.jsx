import React, { useState } from 'react';
import { Container, Form, Row, Col, Alert, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    footballer: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, email, contact, footballer, comments } = formData;

  // Validation
  if (!name || !email || !contact || !footballer || !comments) {
    setError("Please fill in all fields!");
    setSubmitted(false);
    return;
  }

  if (!/^\d{10}$/.test(contact)) {
    setError("Please enter a valid 10-digit phone number!");
    setSubmitted(false);
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      setSubmitted(true);
      setError(null);
      setFormData({ name: '', email: '', contact: '', footballer: '', comments: '' });
    } else {
      setError(data.error || "Submission failed");
    }
  } catch (err) {
    setError("Server error");
  }
};

  return (
    <div>
    <section id="contact" className="block contact-block mb-2">
      <Container fluid>
        <div className="title-holder">
          <h2>Want To Argue With Me For The Rankings?</h2>
          <div className="subtitle">We want to hear your opinions</div>
        </div>
        <div className="m-3">
        {submitted && <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>Form submitted successfully!<br/>You will get an email shortly</Alert>}
        {error && <Alert variant="danger" dismissible onClose={() => setError(null)}>{error}</Alert>}
        </div>
        <Form className="mt-4" onSubmit={handleSubmit}>
          <Col className="contact-form">
            <Row>
              <Col sm={3}>
                <label className="text-start d-block m-2">Name</label>
                <Form.Control name="name" className="m-2" type="text" placeholder="Enter Your Name" onChange={handleChange} />
              </Col>
              <Col sm={3}>
                <label className="text-start d-block m-2">Email Address</label>
                <Form.Control name="email" className="m-2" type="email" placeholder="Enter Your Email" onChange={handleChange} />
              </Col>
              <Col sm={3}>
                <label className="text-start d-block m-2">Contact Number</label>
                <Form.Control name="contact" className="m-2" type="tel" placeholder="Enter Your Contact Number" onChange={handleChange} />
              </Col>
              <Col sm={3}>
                <label className="text-start d-block m-2">Footballer's Name</label>
                <Form.Control name="footballer" className="m-2" type="text" placeholder="Enter Your Favourite Footballer's Name" onChange={handleChange} />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <label className="text-start d-block m-2">Your Message</label>
                <Form.Control name="comments" as="textarea" placeholder="Enter Your Message" onChange={handleChange} className="m-2" />
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="text-middle">
                <Button type="submit" className="m-2">Submit</Button>
              </Col>
            </Row>
          </Col>
        </Form>
      </Container>
    </section>
      <label className="d-block text-center text-white mt-3 mb-3">
          Do we actually care about your opinions? Maybe, Maybe Not :)
      </label>
      <div className="d-flex justify-content-center" style={{ margin: '10px', marginBottom: "20px" }}>
              <Link href="/Reviews" passHref >
                <Button className="frosted-glow-btn">See Other Reviews</Button>
              </Link>
      </div>
    </div>
  );
}