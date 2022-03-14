import React from 'react';
import PropTypes from 'prop-types';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import SidebarContent from './SidebarContent';
import { SidebarProps } from '../../../shared/prop-types/ReducerProps';

const Sidebar = ({
  changeToDark, changeToLight, changeMobileSidebarVisibility, sidebar, selectedStates, onSelected,
}) => {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--show': sidebar.show,
    'sidebar--collapse': sidebar.collapse,
  });

  return (
    <div className={sidebarClass}>
      <button
        type="button"
        aria-label="sidebar visibility"
        className="sidebar__back"
        onClick={changeMobileSidebarVisibility}
      />
      <Scrollbar className="sidebar__scroll scroll">
        <div className="sidebar__wrapper sidebar__wrapper--desktop">
          <SidebarContent
            onClick={() => { }}
            changeToDark={changeToDark}
            changeToLight={changeToLight}
          />
        </div>
        <div className="sidebar__wrapper sidebar__wrapper--mobile">
          <SidebarContent
            onClick={changeMobileSidebarVisibility}
            selectedStates={selectedStates}
            onSelected={onSelected}
            changeToDark={changeToDark}
            changeToLight={changeToLight}
          />
        </div>
      </Scrollbar>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: SidebarProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  selectedStates: PropTypes.shape({
    home: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    disruption: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    supplier: PropTypes.string.isRequired,
  }).isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default Sidebar;
