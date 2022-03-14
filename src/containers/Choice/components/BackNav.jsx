// eslint-disable-next-line object-curly-newline
import { Container, Nav, NavItem } from 'reactstrap';
import React from 'react';

const BackNav = () => (
  <Container>
    <Nav><NavItem><a href="/pages/two" className="arrow left"><b>Back</b></a></NavItem>
    </Nav>
  </Container>
);
export default BackNav;
