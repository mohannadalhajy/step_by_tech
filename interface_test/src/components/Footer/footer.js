import * as React from 'react';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
    return (
        <Box id="contact" sx={{
            minHeight: '260px',
            backgroundColor: '#000',
            color: 'white',
            bottom: "0",
            left: "0",
            right: "0",
            padding: "32px 16px"
        }}>
            <Box sx={{
                fontSize: '20px',
                justifyContent: 'center',
                margin: '10px 0px',
                display: 'flex'
            }}>
                Follow Us
            </Box>
            <Box sx={{
                justifyContent: 'center',
                margin: '10px 0px',
                display: 'flex'
            }}>
                <a title="Facebook" href="www.facebook.com" style={{ marginRight:'5px', padding: '8px 16px', textDecoration: 'none', backgroundColor: '#3daea1', color: 'white', textTransform: 'none', fontSize: '20px' }}>
                    f
                </a>
                <a title="Twitter" href="www.Twitter.com" style={{ marginRight:'5px', padding: '8px 16px', textDecoration: 'none', backgroundColor: '#3daea1', color: 'white', textTransform: 'none', fontSize: '20px' }}>
                    <TwitterIcon />
                </a>
                <a title="Google+" href="www.Googleplus.com" style={{ marginRight:'5px', padding: '8px 16px', textDecoration: 'none', backgroundColor: '#3daea1', color: 'white', textTransform: 'none', fontSize: '20px' }}>
                    <GoogleIcon />
                </a>
                <a title="Instagram" href="www.Instagram.com" style={{ marginRight:'5px', padding: '8px 16px', textDecoration: 'none', backgroundColor: '#3daea1', color: 'white', textTransform: 'none', fontSize: '20px' }}>
                    <InstagramIcon />
                </a>
                <a title="Facebook" href="www.linkedin.com" style={{ marginRight:'5px', padding: '8px 16px', textDecoration: 'none', backgroundColor: '#3daea1', color: 'white', textTransform: 'none', fontSize: '20px' }}>
                    in
                </a>
            </Box>
            <Box sx={{
                fontSize: '15px',
                justifyContent: 'center',
                margin: '15px 0px',
                display: 'flex'
            }}>
                Powered by&nbsp;&nbsp; <a style={{ color: 'white' }} href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
            </Box>
        </Box>
    );
};
