import * as React from 'react';
import { Box, Button, Checkbox, Grid, Input, InputLabel } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export default function Part4() {
    const contents = ['/snow.jpg', '/lights.jpg', '/sailboat.jpg']
    return (
        <Box id='Contact' sx={{
            paddingLeft: '2%',
            paddingRight: '2%',
            marginTop: '40px',
            paddingBottom: '70px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #D9E5E9',
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5} md={6}>
                    <Box sx={{
                        marginTop: '76px',
                        marginBottom: '15px',
                        fontSize: '24px',
                        width: '125px',
                        borderBottom: '6px solid #009688'
                    }}>
                        Contact Us
                    </Box>
                    <Box sx={{
                        marginTop: '15px',
                        marginBottom: '15px',
                        fontSize: '24px',
                        width: '125px',
                    }}>
                        Address
                    </Box>
                    <Box sx={{
                        marginTop: '15px',
                        marginBottom: '15px',
                        fontSize: '15px',
                    }}>
                        Swing by for a cup of coffee, or whatever.
                    </Box>
                    <Box sx={{
                        marginTop: '15px',
                        marginBottom: '15px',
                        fontSize: '16px',
                    }}>
                        <LocationOnIcon color='red'/>
                        Chicago, US
                    </Box>
                    <Box sx={{
                        marginTop: '15px',
                        marginBottom: '15px',
                        fontSize: '16px',
                    }}>
                        <LocalPhoneIcon />
                        +00 1515151515
                    </Box>
                    <Box sx={{
                        marginTop: '15px',
                        marginBottom: '15px',
                        fontSize: '16px',
                    }}>
                        <EmailIcon/>
                        test@test.com
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7} md={6} sx={{
                    paddingLeft: '2%',
                    paddingRight: '2%',
                    marginTop: '70px',
                    paddingBottom: '20px',
                    backgroundColor: '#fff',
                    border: '1px solid #D9E5E9',
                }}>

                    <InputLabel sx={{marginTop:'10px'}} htmlFor="standard-adornment-password">Name</InputLabel>
                    <Input
                        id="name"
                        fullWidth
                        name="name" />
                    <InputLabel sx={{marginTop:'10px'}} htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input
                        id="email"
                        fullWidth
                        name="email" />
                    <InputLabel sx={{marginTop:'10px'}} htmlFor="standard-adornment-password">Message</InputLabel>
                    <Input
                        id="message"
                        fullWidth
                        name="message" />
                    <Box sx={{marginTop:'10px'}}>
                        <Checkbox />I like it
                        <Button sx={{ backgroundColor: 'black', color: 'white', marginLeft: '50%' }}>Send</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}