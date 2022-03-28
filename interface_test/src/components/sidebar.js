import * as React from 'react';
import { Link } from 'react-scroll'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
export default function SidebarContent({handle}) {
    return (
        <Box id="contact" sx={{fontSize:'36px',paddingRight:'70px'}}>
            <Button onClick={handle} sx={{color:'#3daea1', padding:'8px 16px', paddingBottom:'100px'}}>Close X</Button>
            <ul style={{ padding:'8px 16px', listStyle: 'none', textTransform: 'none', margin: '0px' }}>
              <li>
                <Link activeClass="active" to={"Home"} spy={true} smooth={true}>
                  Link1
                </Link>
              </li>
            </ul>
            <ul style={{ padding:'8px 16px', listStyle: 'none', textTransform: 'none', margin: '0px' }}>
              <li>
                <Link activeClass="active" to={"Home"} spy={true} smooth={true}>
                  Link2
                </Link>
              </li>
            </ul>
            <ul style={{ padding:'8px 16px', listStyle: 'none', textTransform: 'none', margin: '0px' }}>
              <li>
                <Link activeClass="active" to={"Home"} spy={true} smooth={true}>
                  Link3
                </Link>
              </li>
            </ul>
            <ul style={{ padding:'8px 16px', listStyle: 'none', textTransform: 'none', margin: '0px' }}>
              <li>
                <Link activeClass="active" to={"Home"} spy={true} smooth={true}>
                  Link4
                </Link>
              </li>
            </ul>
            <ul style={{ padding:'8px 16px', listStyle: 'none', textTransform: 'none', margin: '0px' }}>
              <li>
                <Link activeClass="active" to={"Home"} spy={true} smooth={true}>
                  Link5
                </Link>
              </li>
            </ul>
        </Box>
    );
};
