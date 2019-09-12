import React from "react";

import axios from "axios"

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

// import "./Contact.css";

function FormLoading(props) {
  if (props.loading){
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  } else if (props.success) {
    return (
      <div>{props.msg ? props.msg : "Success"}</div>
    )
  } else {
    return (
      <div>{props.msg ? props.msg : "Failed!"}</div>
    )
  }

}


class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      msg: null,
      success: null,
      form: {
        name: "",
        email: "",
        projectDescription: "",
      }
    }
  }

  async handleSubmit(ele) {
    ele.preventDefault()

    this.setState({ loading: true })

    try {
      const response = await axios.post(
        "/.netlify/functions/contactForm",
        this.state.form
      )
      // const json = await response.json()
      this.setState({
          loading: false,
          msg: "Your message has been successfully sent!",
          success: true
        }
      )

    } catch (e) {
      this.setState({
          loading: false,
          msg: e,
          success: false
        }
      )
    }
  }



  render() {
    const { loading, success, msg } = this.state
    if (loading === false && success === null){
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
    } else {
      return (
      <FormLoading loading={loading} success={success}/>

    )
    }

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
