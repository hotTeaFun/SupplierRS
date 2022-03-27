/* eslint-disable no-unused-vars */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  CardHeader, Col, Container, Row,
} from 'reactstrap';
import InfoIcon from '@mui/icons-material/Info';
import { Grid, Box } from '@material-ui/core';
import FacebookIcon from 'mdi-react/FacebookIcon';
import { Card, CardContent, Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Image } from '@mui/icons-material';
import DemoCard from './components/infoCard';
import VectorMap from '../Maps/VectorMap/index';
import CustomSearchBar from './components/custom_search_bar';

const SupplierPage = () => {
  const { t } = useTranslation('common');
  const [location, setLocation] = React.useState('');
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
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
          <InfoIcon />
          <div style={{ paddingLeft: '12px', paddingBottom: '12px' }}>
            <b className="page-title">Suppliers Information</b>
          </div>
        </div>
        <CustomSearchBar />
        <div className="info_main_div">
          <div className="supplier_info_item">
            <DemoCard />
          </div>
          <div className="supplier_info_item">
            <DemoCard />
          </div>
          <div className="supplier_info_item">
            <DemoCard />
          </div>
          <div className="supplier_info_item">
            <DemoCard />
          </div>
          <div className="supplier_info_item">
            <DemoCard />
          </div>
          <div className="supplier_info_item">
            <DemoCard />
          </div>
          <div className="supplier_info_item">
            <DemoCard />
          </div>
          <div className="supplier_info_item">
            <DemoCard />
          </div>
          <div className="supplier_info_item">
            <DemoCard />
          </div>
        </div>
      </Col>
    </div>
  );
};

SupplierPage.propTypes = {
};

export default compose(connect((state) => ({
  rtl: state.rtl,
})))(SupplierPage);
