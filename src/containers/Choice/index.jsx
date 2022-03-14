/* eslint-disable no-unused-vars */
import { string } from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
// import VectorMap from '../Maps/VectorMap';
import ChoiceSubtitle from './components/ChoiceSubtitle';
import BackNav from './components/BackNav';

const ChoicePage = ({
  name, place, from, to,
}) => (
  <Container>
    <BackNav />
    <Container>
      <Col>
        <h2><b>{name}</b> in <b>{place}</b></h2>
        <ChoiceSubtitle from={from} to={to} />
      </Col>
    </Container>
  </Container>

);
ChoicePage.propTypes = {
  place: string.isRequired,
  name: string.isRequired,
  from: string.isRequired,
  to: string.isRequired,
};
export default ChoicePage;
