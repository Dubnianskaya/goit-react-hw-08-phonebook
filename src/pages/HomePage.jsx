import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import {PagesContainer, HomePageContainer, HomePageBtn, ColStyled} from './Pages.styled'


export const HomePage = () => {
    return (
        <PagesContainer>
 <Container>
  <HomePageContainer>
    <Col> 
    <h2>About us</h2>
    <p>This is the App for you to save, seach, and filter contacts of your friends! Register and stay in touch with all friend whenever you want!</p>
    </Col>
    <ColStyled>
    <LinkContainer to="/login">
        <HomePageBtn variant="outline-primary" size="lg">Sign in</HomePageBtn>
    </LinkContainer>
    <LinkContainer to="/register">
        <HomePageBtn variant="outline-info" size="lg">Sign up</HomePageBtn>
    </LinkContainer>
    </ColStyled>
  </HomePageContainer>
</Container>
</PagesContainer>
      );
}