import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaDiscord, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      href: 'mailto:your-email@example.com',
    },
    {
      icon: <FaDiscord />,
      label: 'Discord',
      href: 'https://discord.gg/your-discord-link',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/your-username',
    },
  ];

  return (
    <section id="contact" className="p-5 bg-light">
      <Container className="contact-box">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <Row className="justify-content-center">
          {contactItems.map((item, index) => (
            <Col key={index} xs={6} md={3} className="text-center mb-3">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="mt-2">{item.label}</div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
