import React from 'react'
import "./contact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='titleContact'>Contact us</h2>
          <div className="subtitle">- get connected with us -</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button className='submit' type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
      <iframe className='googlemap' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.058345601942!2d105.94019361095478!3d20.990298189017548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af0bf0e49a79%3A0x1a0527d8c1315da0!2sVin%20ocean%20park!5e0!3m2!1svi!2s!4v1707107468697!5m2!1svi!2s" ></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul className='contactinfo'>
            <li className='infocon'>
              <i className="fas fa-envelope"></i>
              <span>oceanbooking@gmail.com</span>
            </li>
            <li className='infocon'>
              <i className="fas fa-phone"></i>
              <span>0865-595-505</span>
            </li>
            <li className='infocon'>
              <i className="fas fa-map-marker-alt"></i>
              <span>Vinhome Ocean Park 3: The Empire</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Contact