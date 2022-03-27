import { string } from 'prop-types';
import { Container } from 'reactstrap';
import React from 'react';

const ChoiceSubtitle = ({ from, to }) => (
  <Container className="choice_subtitle">
    <p>Duration from</p>
    <p className="choice_subtitle_timestamp">{from}</p>
    <p>to </p>
    <p className="choice_subtitle_timestamp">{to}</p>
  </Container>
);

ChoiceSubtitle.propTypes = {
  from: string.isRequired,
  to: string.isRequired,
};
export default ChoiceSubtitle;
