/* eslint-disable no-unused-vars */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddSupplierInfoDialog from './add_card_form';

export default function CustomSearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px', display: 'flex', alignItems: 'center', width: '60%', margin: 'auto',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Suppiler Name"
        inputProps={{ 'aria-label': 'Supplier Name' }}
      />
      {/* <TextButton */}
      <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="add">
        <AddSupplierInfoDialog />
      </IconButton>
    </Paper>
  );
}
