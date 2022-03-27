/* eslint-disable no-unused-vars */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  CardHeader, Col, Container, Row,
} from 'reactstrap';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
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
import { DemoCard, DoubleCard } from './components/infoCard';
import BasicDateRangePicker from './components/dateRangePicker';
import VectorMap from '../Maps/VectorMap/index';
import { LocationOptions, TypeOptions } from './components/custom_selector';

const ContractPage = () => {
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
          <ManageSearchIcon />
          <div style={{ paddingLeft: '12px', paddingBottom: '12px' }}>
            <b className="page-title">Form</b>
          </div>
        </div>
        <div className="form_main_div">
          <div className="form_caption_div">Set up</div>
          <p className="form_desc_p">
            You just need to click each angle to show your preference of Contracts selection
          </p>
          <div style={{ display: 'flex', verticalAlign: 'center', alignItems: 'center' }}>
            <div style={{ fontSize: 18, flexBasis: '50%', width: '100%' }}>
              <div className="form_item_div">
                <div style={{ width: 120 }}><b>Price</b></div>
                <TextField
                  label="Lower"
                  type="number"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
                <b>—</b>
                <TextField
                  label="Upper"
                  type="number"
                  id="outlined-start-adornment"
                  size="small"
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </div>
              <div className="form_item_div">
                <div style={{ width: 110 }}><b>Delivery</b></div>
                <TextField
                  label="Earliest"
                  type="number"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    // startAdornment: <InputAdornment position="start">{' '}</InputAdornment>,
                  }}
                />
                <b>—</b>
                <TextField
                  label="Latest"
                  type="number"
                  id="outlined-start-adornment"
                  size="small"
                  sx={{
                    m: 1,
                  }}
                  InputProps={{
                    // startAdornment: <InputAdornment position="start">{' '}</InputAdornment>,
                  }}
                />
              </div>
              <div className="form_item_div">
                <div style={{ width: 120 }}><b>Cost</b></div>
                <TextField
                  label="Lower"
                  type="number"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
                <b>—</b>
                <TextField
                  label="Upper"
                  type="number"
                  id="outlined-start-adornment"
                  size="small"
                  sx={{
                    m: 1,
                  }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </div>
              <div className="form_item_div">
                <div style={{ width: 70 }}><b>Location</b></div>
                <FormControl>
                  <LocationOptions />
                </FormControl>
              </div>
              <div className="form_item_div">
                <div style={{ width: 70 }}><b>Type</b></div>
                <FormControl>
                  <TypeOptions />
                </FormControl>
              </div>
            </div>
            <div style={{ flexBasis: '50%', backgroundColor: '#C4C4C4' }}>
              <div />
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

ContractPage.propTypes = {
};

export default compose(connect((state) => ({
  rtl: state.rtl,
})))(ContractPage);
