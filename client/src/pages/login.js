
import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";



const Login = () => {
  const SignInFn = (z) => {
    axios.post("http://localhost:5000/login", z).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <Container>
     
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <FormControl
                  width='50%'
                  type='text'
                  className='mr-sm-2 '
                  id='username'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <FormControl
                  width='50%'
                  type='number'
                  className='mr-sm-2 '
                  id='PhoneNumber'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <FormControl
                  width='50%'
                  type='text'
                  className='mr-sm-2 '
                  id='email'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <FormControl
                  width='50%'
                  type='text'
                  className='mr-sm-2 '
                  id='password'
                />
              </Form.Group>

              <Button
                onClick={() => {
                  console.log(
                    document.querySelector("#username").value,
                    document.querySelector("#PhoneNumber").value,
                    document.querySelector("#email").value,
                    document.querySelector("#password").value
                  );
                  SignInFn({
                    username: document.querySelector("#username").value,
                    address: document.querySelector("#PhoneNumber").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                  });
                }}
                type='submit' variant='primary'
              >
                Sign in
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
)
}


export default Login;

