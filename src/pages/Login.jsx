import { useState } from "react";
import {PagesContainer} from './Pages.styled';
import { useDispatch } from "react-redux";
import authOperations from '../redux/auth/auth-operations';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const Login = () => {
   
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    switch (event.target.name) {
    
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
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.logIn({  email, password }));
    reset();
  };

    return (
        <PagesContainer>
          <Form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "center", flexDirection: "column", width: 300}}> 
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
       </Form.Group>
       <Button type="submit" variant="primary" style={{marginTop: 20}}>Log in</Button>
       </Form>
        </PagesContainer>
      );
}