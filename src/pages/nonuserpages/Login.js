import React, { useState } from 'react'

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
    Divider
} from '@mui/material';

import { Link } from 'react-router-dom';

import logoRendezvous from '../../assets/img/RendezvousNewLogo.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const style = {
    marginStyle: {
        marginTop: 1
    },
    root: {
        padding: "80px 20px",
    },
    menuLink: {
        fontSize: "1.2rem",
        marginLeft: 2,
        "&:hover": {
            color: theme => theme.palette.secondary.main,
        }
    },
    section1: {
        backgroundColor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 40px",
        borderRadius: 2
    },
    headingStyle1: {
        marginTop: "-10px",
        textAlign: "center",
        fontWeight: 700,
        fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.5rem",
        },
        fontFamily: "ComicSans"
    },
    subtitle1: {
        textAlign: "center",
        fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.5rem",
        },
    },
    labelStyle: {
        fontSize: 20
    },
    btnColor: {
        backgroundColor: '#bcc4c4'
    }
}

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={style.root}>
            <Grid container justifyContent="center">
                <Box sx={style.section1} boxShadow={12}>
                    <Typography variant="subtitle1" color="textPrimary" sx={style.headingStyle1}>
                        Sign in to your Rendezvous Account
                    </Typography>
                    <img
                        src={logoRendezvous}
                        alt="Rendezvous Logo"
                        style={{ height: "100px", width: "100px" }}
                    />
                    <Button
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        sx={{ ...style.marginStyle, ...style.btnColor }}
                    >
                        Sign In With Google+
                    </Button>
                    <Typography
                        variant="subtitle1"
                        sx={style.marginStyle}
                    >
                        OR
                    </Typography>
                    <FormControl sx={{ m: 1, backgroundColor: 'white' }} fullWidth variant="outlined">
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="Email Address"
                            onChange={handleChange('email')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size="medium"
                            InputLabelProps={{
                                sx: style.labelStyle
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, backgroundColor: 'white' }} fullWidth variant="outlined">
                        <TextField
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            placeholder="Password"
                            onChange={handleChange('password')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            InputLabelProps={{
                                sx: style.labelStyle
                            }}
                        />
                    </FormControl>
                    <Button
                        variant="outlined"
                        startIcon={<ExitToAppIcon />}
                        sx={style.marginStyle}
                    >
                        Sign In
                    </Button>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            marginTop: 3
                        }}
                    >

                        Don't have an Accoount
                    </Typography>
                    <Button
                        variant="outlined"
                        startIcon={<PersonAddIcon />}
                        sx={{
                            marginTop: 3
                        }}
                    >
                        <Link to="/register" sx = {{ textDecoration: 'none'}}>
                            Register New Account
                        </Link>
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}
