import React from 'react';
import { Col, Container, Row } from 'reactstrap';
// import VectorMap from '../Maps/VectorMap';
import ChoiceSubtitle from './choice_subtitle';

const ExamplePage = () => (
  <div className="landing__header">
    <Container>
      <Row>
        <Col>
          <h2 className="landing__header-title"><b>(Disruption Name) in (Place)</b></h2>
          <ChoiceSubtitle from="123" to="234" />
          <h2 className="landing__header-title">Also available on</h2>
          <div className="landing__header-language-wrap">
            <a
              className="landing__header-language"
              target="_blank"
              rel="noopener noreferrer"
              href="https://clck.ru/RE2qj"
            >
              <p>HTML</p>
            </a>
            <a
              className="landing__header-language"
              target="_blank"
              rel="noopener noreferrer"
              href="https://clck.ru/RE2sy"
            >
              <p>Angular</p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ExamplePage;
