import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Typography, Grid, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { blue } from '@mui/material/colors';
import GetAppIcon from '@material-ui/icons/GetApp';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//modal show the relevant
//parameters of the element 
export default function SimpleDialogDemo({ detailes, openModal, setOpenModal }) {
    const handleClose = (value) => {
        setOpenModal(false)
    };
    return (
        <div>
            <br />
            <SimpleDialog
                detailes={detailes}
                open={openModal}
                onClose={handleClose}
            />
        </div>
    );
}
function SimpleDialog({ detailes, open, onClose }) {
    return (
        <Dialog onClose={onClose} open={open} >
            <DialogTitle style={{
                textAlign: "center", color: 'red', fontFamily: 'monospace',
                letterSpacing: '.3rem',
            }}>Some Details:)</DialogTitle>
            <Grid
                container
                direction="row"
                justify="center"
            >
                <Grid item xs>
                    <img style={{padding:'5%' ,width: "19vw", height: '25vh'}} src={detailes.previewURL} />
                </Grid>
                <Grid item xs>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <GetAppIcon />
                            </ListItemIcon>
                            <ListItemText primary={detailes.downloads} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ThumbUpIcon  />
                            </ListItemIcon>
                            <ListItemText  primary={detailes.likes} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <      VpnKeyIcon
                                />
                            </ListItemIcon>
                            <ListItemText primary={detailes.id} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={detailes.user} />
                        </ListItemButton>

                    </List>
                </Grid>
            </Grid>
        </Dialog>
    );
}
