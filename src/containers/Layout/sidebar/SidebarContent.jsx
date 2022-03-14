/* eslint-disable prefer-template */
/* eslint-disable object-curly-newline */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import { ListGroup, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GavelIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import { Divider, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const initStates = {
  actived: '',
};
const allPageConfs = {
  home: {
    name: 'Home Page',
    icon: <HomeIcon fontSize="small" />,
  },
  form: {
    name: 'Form',
    icon: <ManageSearchIcon fontSize="small" />,
  },
  disruption: {
    name: 'Disruption',
    icon: <EventNoteIcon fontSize="small" />,
  },
  contract: {
    name: 'Contract',
    icon: <GavelIcon fontSize="small" />,
  },
  supplier: {
    name: 'Supplier information',
    icon: <InfoIcon fontSize="small" />,
  },
};
const allPages = Object.keys(allPageConfs);
const SidebarContent = ({ onClick, changeToDark, changeToLight }) => {
  const handleHideSidebar = () => {
    onClick();
  };
  const [state, setState] = React.useState(initStates);
  const handleOnClick = (name) => () => {
    setState({ actived: name });
  };
  return (
    <div className="sidebar__content">
      <div className="sidebar_home_title">
        SUPPLIER RECOMMENDATION SYSTEM
      </div>
      <Divider variant="middle" />
      <List>
        {
          allPages?.map((page) => {
            const flag = state.actived === page;
            const url = '/pages/' + page;
            return (
              <NavLink href={url}>
                <ListItemButton
                  key={page}
                  sx={{ backgroundColor: flag ? '#676763' : '#B9B9B9' }}
                  onClick={handleOnClick(page)}
                  onFocus={() => { }}
                >
                  <ListItemIcon sx={{ color: flag ? '#FFFFFF' : '#151515' }}>
                    {allPageConfs[page].icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={<b>{allPageConfs[page].name}</b>}
                    primaryTypographyProps={{
                      color: flag ? '#FFFFFF' : '#151515',
                    }}
                  />
                </ListItemButton>
              </NavLink>
            );
            /*  return (
               <div className="sidebar_menu_div">
                 <div className="sidebar_menu_icon">{allPageConfs[page].icon}</div>
                 <b>{allPageConfs[page].name}</b>
               </div>
             ); */
          })
        }
      </List>
    </div>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  navPages: PropTypes.shape({
    home: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    disruption: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    supplier: PropTypes.string.isRequired,
  }).isRequired,
};

export default SidebarContent;
