import * as React from 'react';
import { AppBar, Typography, Container, Box, Toolbar } from '@mui/material';
import CategoryModal from '../components/CategoryModal'
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { makeStyles } from '@mui/styles'
import Select from './SortingButton'
const useStyles = makeStyles({
    appBar: {
        background: 'linear-gradient(45deg, red 50%, white 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, 255)',
        color: 'white',
        height: 60,
        padding: '0 30px',
    },
});
export default function ResponsiveAppBar() {
    
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LocalSeeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            fontFamily: 'monospace',

                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Gallery
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <CategoryModal />
                    </Box>
                    <Select/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
