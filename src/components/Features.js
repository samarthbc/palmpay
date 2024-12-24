import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Features.css';
import './SectionWrapper.css'; // Import wrapper effects

const Features = () => {
  const features = [
    {
      title: "Biometric Payment",
      description:
        "Make payments using palm detection combined with a secure 4-digit PIN for two-factor authentication.",
      icon: "🖐️",
    },
    {
      title: "Behavioral Analysis",
      description:
        "Track financial behavior using AI to detect fraud. Map spending habits to emotional patterns for better insights.",
      icon: "🤖",
    },
    {
      title: "Finance Management",
      description:
        "Manage your personal finances effortlessly with AI-powered tools for budgeting and expense tracking.",
      icon: "📊",
    },
  ];

  return (
    <div className="section-wrapper">
      <section id="features" className="p-5">
        <Container>
          <h2 className="text-center mb-4">Features</h2>
          <Row>
            {features.map((feature, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 feature-card">
                  <Card.Body className="text-center">
                    <div className="mb-3" style={{ fontSize: "2rem" }}>
                      {feature.icon}
                    </div>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Features;
