/* eslint-disable no-unused-vars */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  CardHeader, Col, Container, Row,
} from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import { Grid, Box } from '@material-ui/core';
import FacebookIcon from 'mdi-react/FacebookIcon';
import { Card, CardContent } from '@mui/material';
import VectorMap from '../Maps/VectorMap/index';
import BasicDateRangePicker from './components/dateRangePicker';
import { DemoCard, DoubleCard } from './components/infoCard';

const HomePage = () => {
  const { t } = useTranslation('common');
  const demo = {
    id: '351123',
    delivery: '2022.03.07',
    transportation: 'AIR',
    type: 'Oil',
    quantity: '100KG',
  };
  return (
    <div>
      <Col>
        <div style={{ display: 'flex', paddingLeft: '12px', verticalAlign: 'center' }}>
          <HomeIcon />
          <div style={{ paddingLeft: '12px', paddingBottom: '12px' }}>
            <b className="page-title">Home Page</b>
          </div>
        </div>
        <VectorMap />
        <div style={{ color: '#3B5AFB', paddingBottom: '20px' }}>
          <BasicDateRangePicker />
        </div>
        <div className="homepage_info_container">
          {Object.keys(demo).map((label) => (
            <div className="home_info_item">
              <DemoCard label={label} content={demo[label]} />
            </div>
          ))}
          <DoubleCard from="China" to="Singapore" />
        </div>
      </Col>
    </div>
  );
};

HomePage.propTypes = {
};

export default compose(connect((state) => ({
  rtl: state.rtl,
})))(HomePage);
