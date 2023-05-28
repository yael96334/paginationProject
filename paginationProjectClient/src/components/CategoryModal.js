import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getAll } from '../api/ImagesApi';
// this is component display the modal enable to change categoey
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");

  const dis = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    //send the selected category to api
    dis(getAll(category))
    // close modal
    setOpen(false);

  };
  return (
    <div>
      <Grid style={{ display: 'flex', justifyContent: 'center' }} >
        <Button style={{ color: 'white' }} onClick={handleClickOpen}>
          Category
        </Button>
      </Grid>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle color='red' >Category Modal</DialogTitle>
        <DialogContent>
          <DialogContentText>
          select the type of the photos for example: animals, flowers, work etc             
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}