import styled from "styled-components";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

export const Title = styled.h2`
  font-size: 40px;
  color: #14aaf5;
  text-align: center;
`;

export const PagesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url('https://cdn.sei.org/wp-content/uploads/2021/07/rami-al-zayat-w33-zg-dnl4-unsplash-1374x916.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const HomePageContainer = styled(Row)`
  align-items: center;
`;

export const HomePageBtn = styled(Button)`
margin: 0px 30px;
`;

export const ColStyled = styled(Col)`
display: flex;
justify-content: flex-end;
`