/* eslint-disable no-unused-vars */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { Card, CardHeader } from '@mui/material';
import FacebookIcon from 'mdi-react/FacebookIcon';
import { CardBody } from 'reactstrap';

export default function DemoCard() {
  return (
    <Card>
      <CardHeader>
        <FacebookIcon />
      </CardHeader>
      <CardBody>
        <p>ID: 351123</p>
      </CardBody>
    </Card>
  );
}
