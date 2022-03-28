import * as React from 'react';
import { Box, Button, Grid } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
export default function Part3() {
    const members = [{ address: "Basic", size: "10", color: "black" }, { address: "Pro", size: "25", color: "#666" }, { address: "Premium", size: "50", color: "black" }]
    return (
        <Box id='Price'
            sx={{
                paddingLeft: '7%',
                paddingRight: '7%',
                paddingTop: '50px',
            }}>
            <Box sx={{
                fontFamily: 'Gilroy',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '36px',
                lineHeight: '93.47%',
                textAlign: 'center',
                paddingBottom: '25px'
            }}>
                PRICING
            </Box>
            <Box sx={{
                fontFamily: 'Gilroy',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '93.47%',
                textAlign: 'center',
                paddingBottom: '25px'
            }}>
                Choose a pricing plan that fits your needs.
            </Box>
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                {members.map(member => (
                    <Grid sx={{ textAlign: 'center' }} item xs={12} sm={4}>
                        <Box sx={{ fontSize: '24px', padding: '30px 16px', width: '100%',paddingRight:'0px',paddingLeft:'0px', backgroundColor: member.color, color: 'white' }}>{member.address}</Box>
                        <Box sx={{ fontSize: '15px', padding: '16px 0px', border: '1px solid', borderColor: '#bbb' }}><b>{member.size}GB</b> Storage</Box>
                        <Box sx={{ fontSize: '15px', padding: '16px 0px', border: '1px solid', borderColor: '#bbb' }}><b>{member.size}</b> Emails</Box>
                        <Box sx={{ fontSize: '15px', padding: '16px 0px', border: '1px solid', borderColor: '#bbb' }}><b>{member.size}</b> Domains</Box>
                        <Box sx={{ fontSize: '15px', padding: '16px 0px', border: '1px solid', borderColor: '#bbb' }}><b>Endless</b> Support</Box>
                        <Box sx={{ fontSize: '30px', padding: '16px 0px', border: '1px solid', borderColor: '#bbb' }}><b><AttachMoneyIcon/>{member.size}</b></Box>
                        <Box sx={{ fontSize: '15px', padding: '16px 0px', color:'#555' , border: '1px solid', borderColor: '#bbb'}}>per month</Box>
                        <Box sx={{ padding: '16px 0px', border: '1px solid', borderColor: '#bbb'}}>
                        <Button sx={{color:'white', backgroundColor:'#009688', padding:'12px 24px', borderColor: '#bbb'}}>Sign Up</Button>
                        </Box>

                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}