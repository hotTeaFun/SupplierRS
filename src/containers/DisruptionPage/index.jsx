/* eslint-disable no-unused-vars */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  CardHeader, Col, Container, Row,
} from 'reactstrap';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Grid, Box } from '@material-ui/core';
import FacebookIcon from 'mdi-react/FacebookIcon';
import {
  Card, CardContent, Input, List, ListItem, Stack,
} from '@mui/material';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DemoCard, DoubleCard } from './components/infoCard';
import BasicDateRangePicker from './components/dateRangePicker';
import VectorMap from '../Maps/VectorMap/index';
import { LocationOptions, TypeOptions } from './components/custom_selector';
import FollowerLineChart from './components/follower_line_chart';
import DemoComposedChart from './components/demo_composed_chart';

const DisruptionPage = () => {
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F2F4F7',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const WhiteItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const ExpandedButton = styled(Button)(({ theme }) => ({
    minWidth: '90%',
  }));
  return (
    <div>
      <Col>
        <div style={{ display: 'flex', paddingLeft: '12px' }}>
          <EventNoteIcon />
          <div style={{ paddingLeft: '12px', paddingBottom: '12px' }}>
            <b className="page-title">Diruption</b>
          </div>
        </div>
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item xs={6}>
            <Item>
              <b className="page-title">Diruption type</b>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <b className="page-title">Diruption evaluation</b>
            </Item>
          </Grid>
        </Grid>
        <div className="disruption_main_div">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
              <Item>
                <Col>
                  <div style={{ paddingLeft: '12px', paddingBottom: '12px' }}>
                    <List>
                      <ListItem>
                        <div className="disruption_number_div">01</div>
                        <Container className="disruption_item_div" />
                      </ListItem>
                      <ListItem>
                        <div className="disruption_number_div">02</div>
                        <Container className="disruption_item_div" />
                      </ListItem>
                      <ListItem>
                        <div className="disruption_number_div">03</div>
                        <Container className="disruption_item_div" />
                      </ListItem>
                      <ListItem>
                        <div className="disruption_number_div">04</div>
                        <Container className="disruption_item_div" />
                      </ListItem>
                      <ListItem>
                        <div className="disruption_number_div">05</div>
                        <Container className="disruption_item_div" />
                      </ListItem>
                      <ListItem>
                        <div className="disruption_number_div">06</div>
                        <Container className="disruption_item_div" />
                      </ListItem>
                    </List>
                  </div>
                </Col>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Col>
                  <div style={{ paddingLeft: '12px', paddingBottom: '12px' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <WhiteItem>
                          <Col>
                            <div style={{ paddingTop: '10px' }}>
                              <EditIcon />
                            </div>
                            <div style={{ fontSize: 30, paddingTop: '10px' }}>
                              <b>48</b>
                            </div>
                            <p>New Post</p>
                          </Col>
                        </WhiteItem>
                      </Grid>
                      <Grid item xs={6}>
                        <WhiteItem>
                          <Col>
                            <div style={{ paddingTop: '10px' }}>
                              <AttachFileIcon />
                            </div>
                            <div style={{ fontSize: 30, paddingTop: '10px' }}>
                              <b>291</b>
                            </div>
                            <p>Attached Files</p>
                          </Col>
                        </WhiteItem>
                      </Grid>
                      <Grid item xs={6}>
                        <WhiteItem>
                          <Col>
                            <div style={{ paddingTop: '10px' }}>
                              <CommentIcon />
                            </div>
                            <div style={{ fontSize: 30, paddingTop: '10px' }}>
                              <b>481</b>
                            </div>
                            <p>Comments</p>
                          </Col>
                        </WhiteItem>
                      </Grid>
                      <Grid item xs={6}>
                        <WhiteItem>
                          <Col>
                            <div style={{ paddingTop: '10px' }}>
                              <VisibilityIcon />
                            </div>
                            <div style={{ fontSize: 30, paddingTop: '10px' }}>
                              <b>110</b>
                            </div>
                            <p>Total Views</p>
                          </Col>
                        </WhiteItem>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={10}>
                        <WhiteItem>
                          <div style={{ width: '100%', height: 150 }}>
                            <FollowerLineChart />
                          </div>
                        </WhiteItem>
                      </Grid>
                      <Grid item xs={10}>
                        <WhiteItem>
                          <div style={{ width: '100%', height: 150 }}>
                            <DemoComposedChart />
                          </div>
                        </WhiteItem>
                      </Grid>
                    </Grid>
                  </div>

                  <ExpandedButton variant="contained">More Information</ExpandedButton>
                </Col>
              </Item>
            </Grid>
          </Grid>
        </div>
      </Col>
    </div>
  );
};

DisruptionPage.propTypes = {
};

export default compose(connect((state) => ({
  rtl: state.rtl,
})))(DisruptionPage);
