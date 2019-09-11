import React from "react";

import axios from "axios"

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import "./Contact.css";


class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      msg: null,
      form: {
        name: "",
        email: "",
        projectDescription: "",
      }
    }
  }

  async handleSubmit(e) {
    e.preventDefault()

    this.setState({ loading: true })

    console.log(e)

    try {
      const response = await axios.post(
        "/.netlify/functions/contactForm",
        this.state.form
      )
      const json = await response.json()

      console.log("SUCCESS", json)

    } catch (e) {

      console.log(e)
    }

  }



  render() {
    const { loading, msg } = this.state

    return (
      <Container>
          <Form onSubmit={(e) => this.handleSubmit(e) }>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text" placeholder="Your Name"
                onChange={(i) => this.setState({form: {...this.state.form, name: i.target.value } })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                onChange={(i) => this.setState({form: {...this.state.form, email: i.target.value } })}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description of your project</Form.Label>
              <Form.Control as="textarea" rows="3"
              onChange={(i) => this.setState({form: {...this.state.form, projectDescription: i.target.value } })}
              />

            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>

    )
  }
}


function Contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <p>How can we help.</p>
      <ContactForm/>
    </div>
  );
}


export default Contact;
