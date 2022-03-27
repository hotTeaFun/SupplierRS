/* eslint-disable no-unused-vars */
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CommentIcon from '@mui/icons-material/Comment';
import InfoIcon from '@mui/icons-material/Info';
import PlaceIcon from '@mui/icons-material/Place';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import MoreIcon from '@mui/icons-material/More';
import PropTypes from 'prop-types';

const demosx = {
  display: 'flex', alignSelf: 'center', fontSize: '18px', transform: 'translate(0px,4px)',
};
const configs = {
  location: {
    icon: <LocationOnIcon sx={demosx} />,
    caption: 'Unknown location',
  },
  inventory: {
    icon: <InventoryIcon sx={demosx} />,
    caption: 'Unknown inventory',
  },
  type: {
    icon: <CommentIcon sx={demosx} />,
    caption: 'Unknown type',
  },
  utilisation: {
    icon: <DataUsageIcon sx={demosx} />,
    caption: 'Unknown utilisation',
  },
  facilities: {
    icon: <MoreIcon sx={demosx} />,
    caption: 'Unkonwn facilities',
  },
};
const defaultConfigs = {
  label: 'Unknown label',
  logo: `${process.env.PUBLIC_URL}/img/burger.svg`,
};
const configLabels = Object.keys(configs);
const DemoCard = ({
  label, picture, location, inventory, type, utilisation, facilities,
}) => {
  const data = {
    label, picture, location, inventory, type, utilisation, facilities,
  };
  return (
    <div className="supplier_info_card_div">
      <div>
        <div className="info_card_top_div">
          <img src={data.picture ? data.picture : defaultConfigs.logo} alt="Not available yet" />
        </div>
        <div className="info_card_bottom_div">
          {configLabels.map((key) => (
            <div className="info_card_item_div">
              {configs[key].icon}
              <p className="info_content_p">{data[key] ? data[key] : configs[key].caption}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="info_supplier_name_p">{data.label ? data.label : defaultConfigs.label}</p>
      </div>
    </div>
  );
};
DemoCard.propTypes = {
  label: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  inventory: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  utilisation: PropTypes.string.isRequired,
  facilities: PropTypes.string.isRequired,
};
export default DemoCard;
