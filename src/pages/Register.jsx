import { useState } from "react";
import {PagesContainer} from './Pages.styled'
import { useDispatch } from "react-redux";
import authOperations from '../redux/auth/auth-operations';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const Register = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;

      case "email":
        setEmail(event.target.value);
        break;

      case "password":
        setPassword(event.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

    return (
        <PagesContainer>
          <Form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}> 
          <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={name} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Password
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <Form.Text muted>
            Your password must be 8-20 characters long.
          </Form.Text>
          </Form.Label>
          </Form.Group>
          <Button type="submit" variant="info">Log in</Button>
          </Form>
        </PagesContainer>
      );
}
