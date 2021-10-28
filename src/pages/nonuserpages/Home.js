import React from 'react'
import { Box, Button, AppBar, Toolbar, Link, Typography, Grid, Avatar } from '@mui/material';

import Navbar from '../../components/navbar/Navbar'
import Bg from '../../assets/img/lms.png'
import LiveTvIcon from '@mui/icons-material/LiveTv';

const style = {
    //helper
    marginTop3: {
        marginTop: 3
    },
    marginLeft1: {
        marginLeft: {
            xs: 3,
            sm: 5,

        }
    },
    root: {
        backgroundColor: (theme) => theme.palette.background.default,
    },
    menuLink: {
        fontSize: "1.2rem",
        marginLeft: 2,
        "&:hover": {
            color: theme => theme.palette.secondary.main,
        }
    },
    section1: {
        padding: "100px 0px",
        backgroundImage: `URL(${Bg})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    headingStyle1: {
        textAlign: "center",
        fontWeight: 700,
        fontSize: {
            xs: "1.0rem",
            sm: "1.2rem",
            md: "2.8rem",
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
    section2: {

        backgroundColor: (theme) => theme.palette.secondary.main,
        padding: "20px 0",
    },
    userImage: {
        height: {
            xs: 200,
            sm: 250
        },
        width: {
            xs: 200,
            sm: 250
        },
    },
    images: {
        height: 400
    },
    columnContainer: {
        display: "flex",
        justifyContent: "center",
        padding: 5
    }

}
export default function Home() {
    return (
        <Box>
            <Navbar />

            <Box sx={style.section1}>
                <Grid container justifyContent="flex-start">
                    <Typography variant="h1" color="textPrimary" sx={{ ...style.headingStyle1, ...style.marginTop3, ...style.marginLeft1 }}>
                        Learn HTML, CSS, Web Apps and More
                    </Typography>
                </Grid>
                <Grid container justifyContent="flex-start">
                    <Typography variant="subtitle1" sx={{ ...style.marginLeft1, ...style.marginTop3 }}>Learn how to Build Websites and Apps write a code or Start a Business</Typography>
                </Grid>
                <Grid container justifyContent="flex-start">
                    <Button variant="contained" sx={{ ...style.marginLeft1, ...style.marginTop3 }}>MAKE A TOUR</Button>
                </Grid>
            </Box>
            <Box sx={style.section2}>
                <Grid container justifyContent="center" >
                    <Grid sm item  sx={style.columnContainer}>
                        <LiveTvIcon />
                        <Grid>
                            <Typography>968 online courses</Typography>
                            <Typography>968 online courses</Typography>
                        </Grid>

                    </Grid>
                    <Grid sm item>
                        <Grid sm item  sx={style.columnContainer}>
                            <LiveTvIcon />
                            <Grid>
                                <Typography>968 online courses</Typography>
                                <Typography>968 online courses</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid sm item>
                        <Grid sm item  sx={style.columnContainer}>
                            <LiveTvIcon />
                            <Grid>
                                <Typography>968 online courses</Typography>
                                <Typography>968 online courses</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
