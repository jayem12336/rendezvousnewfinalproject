import React from 'react'
import {
    Box,
    Button,
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Avatar,
    TextField,
    InputAdornment,
    FormControl,
    InputLabel,
    OutlinedInput,
    IconButton,
    Link,
    Divider
} from '@mui/material';

import logoRendezvous from '../../assets/img/RendezvousNewLogo.jpg'

export default function Navbar() {
    return (
        <Box >
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <img
                        src={logoRendezvous}
                        alt="Rendezvous Logo"
                        style={{ height: "50px", width: "50px" }}
                    />
                    <Link href="#" underline="none">
                        <Typography variant="h6" sx={{ marginLeft: 1, color: "black" }}>Rendezvous</Typography>
                    </Link>
                    <Box component="span" sx={{ flexGrow: 1 }}>
                        <Grid container justifyContent="center">
                            <Typography sx={{ marginLeft: 2, marginRight: 2 }} variant="h6">Home</Typography>
                            <Typography sx={{ marginLeft: 2, marginRight: 2 }} variant="h6">Guide</Typography>
                            <Typography sx={{ marginLeft: 2, marginRight: 2 }} variant="h6">Contact</Typography>
                            <Typography sx={{ marginLeft: 2, marginRight: 2 }} variant="h6">About</Typography>
                        </Grid>
                    </Box>
                    <Link href="#" underline="none">
                        <Typography variant="h6">Login</Typography>
                    </Link>
                    <Divider orientation="vertical" flexItem style={{ margin: '10px', backgroundColor: 'black' }} />
                    <Link href="#" underline="none">
                        <Typography variant="h6">Sign up</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
