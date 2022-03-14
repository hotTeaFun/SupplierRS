/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import Map from './components/Map';

const VectorMap = () => {
  const { t } = useTranslation('common');

  return (
    <Map />
  );
};

export default VectorMap;
