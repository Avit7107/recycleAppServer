import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  Modal,
  Row,
  Col,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

export function Settinguser(props) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.LoginReducer.userData);
  const [editable, seteditable] = useState(false);

  const updateUser = (userData) => {
    axios
      .post("http://localhost:5000/updateuser", { userData })
      .then((res) => console.log(res));
  };
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          User settings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Form inline>
                {editable ? (
                  <FormControl
                    type='text'
                    defaultValue={userData.username}
                    className='mr-sm-2 '
                    onChange={(e) => {
                      dispatch({
                        type: "UPDATE_USER",
                        payload: {
                          ...userData,
                          username: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  `username : ${userData.username}`
                )}
              </Form>
            </Col>
            <Col xs={6} md={4}>
              <button
                onClick={() => seteditable(!editable)}
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <Form inline>
                {/* <FormControl
                  type='text'
                  defaultValue='input'
                  className='mr-sm-2 '
                /> */}
                {editable ? (
                  <FormControl
                    type='text'
                    defaultValue={userData.email}
                    className='mr-sm-2 '
                    id='email'
                    onChange={(e) => {
                      dispatch({
                        type: "UPDATE_USER",
                        payload: {
                          ...userData,
                          email: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  `email : ${userData.email}`
                )}
              </Form>
            </Col>
            <Col xs={6} md={4}></Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <Form inline>
                {editable ? (
                  <FormControl
                    type='text'
                    defaultValue={userData.address}
                    className='mr-sm-2 '
                    id='address'
                    onChange={(e) => {
                      dispatch({
                        type: "UPDATE_USER",
                        payload: {
                          ...userData,
                          address: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  `address : ${userData.address}`
                )}
              </Form>
            </Col>
            <Col xs={6} md={4}></Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            !editable && updateUser(userData);
          }}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
        }
        