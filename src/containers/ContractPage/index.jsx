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
import {
  Card, CardContent, Divider, Input,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { DemoCard, DoubleCard } from './components/infoCard';
import BasicDateRangePicker from './components/dateRangePicker';
import VectorMap from '../Maps/VectorMap/index';
import { LocationOptions, TypeOptions } from './components/custom_selector';
import ContractDataTable from './components/contract_table';

const ContractPage = () => {
  const { t } = useTranslation('common');
  const [location, setLocation] = React.useState('');
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleExpiredDateChange = (newValue) => {
    setValue(newValue);
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
            <b className="page-title">Contract</b>
          </div>
        </div>
        <div className="contract_main_div">
          <div>
            <div style={{
              display: 'flex', flexDirection: 'row', verticalAlign: 'center', alignItems: 'center',
            }}
            >
              <div className="contract_item_div">
                <div><b>Company Name</b></div>
                <TextField
                  label="name"
                  type="text"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                  }}
                />
              </div>
              <div className="contract_item_div">
                <div><b>Raw material type</b></div>
                <TextField
                  label="type"
                  type="text"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  InputProps={{
                  }}
                />
              </div>
              <div className="contract_item_div">
                <div><b>Expire date</b></div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    InputProps={{
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="date"
                        size="small"
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="contract_item_div">
                <Container sx={{ padding: '10px' }}>
                  <Button variant="contained">Search</Button>
                </Container>
              </div>
            </div>
            <ContractDataTable />
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
