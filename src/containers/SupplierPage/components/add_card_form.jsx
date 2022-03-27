/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
import OutlinedInput from '@mui/material/OutlinedInput';
import { LocationOptions, TypeOptions } from './custom_selector';

export default function AddSupplierInfoDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddCircleOutlineIcon variant="outlined" onClick={handleClickOpen} />
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Add new supplier</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Some information is need to step ahead.
          </DialogContentText>
          <div style={{ fontSize: 18 }}>
            <div className="add_supplier_form_item_div">
              <div style={{ width: 80 }}><b>Name</b></div>
              <FormControl>
                <div style={{ paddingRight: '8px' }}>
                  <TextField sx={{ width: 320 }} size="small" label="Name" variant="outlined" />
                </div>
              </FormControl>
            </div>
            <div className="add_supplier_form_item_div">
              <div style={{ width: 120 }}><b>Photo</b></div>
              <FormControl>
                <div style={{ paddingRight: '8px' }}>
                  <OutlinedInput
                    sx={{ width: 320 }}
                    size="small"
                    type="file"
                    label="photo"
                    name="photo"
                    placeholder="photo"
                  />
                </div>
              </FormControl>
            </div>
            <div className="add_supplier_form_item_div">
              <div style={{ width: 100 }}><b>Location</b></div>
              <FormControl>
                <LocationOptions />
              </FormControl>
            </div>
            <div className="add_supplier_form_item_div">
              <div style={{ width: 100 }}><b>Type</b></div>
              <FormControl>
                <TypeOptions />
              </FormControl>
            </div>
            <div className="add_supplier_form_item_div">
              <div style={{ width: 100 }}><b>Inventory</b></div>
              <FormControl>
                <TypeOptions />
              </FormControl>
            </div>
            <div className="add_supplier_form_item_div">
              <div style={{ width: 100 }}><b>Utilisation</b></div>
              <FormControl>
                <TypeOptions />
              </FormControl>
            </div>
            <div className="add_supplier_form_item_div">
              <div style={{ width: 100 }}><b>Facilities</b></div>
              <FormControl>
                <TypeOptions />
              </FormControl>
            </div>
          </div>
          <div style={{ flexBasis: '50%', backgroundColor: '#C4C4C4' }}>
            <div />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
