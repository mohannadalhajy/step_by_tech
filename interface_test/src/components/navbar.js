import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll'
import { LOGO1 } from '../constants';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const options = ['Team', 'Work', 'Price', 'Contact', 'Dropdown']
const styles = {
  ul: {
    listStyle: 'none',
    textTransform: 'none',
  },
  hr: {
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transform: 'rotate(90deg)',
    width: '12px',
    height: '0.2px',
  },
  helpCenter: {
    display: 'flex',
    color: 'white'
    // display: { xs: 'none', md: 'flex' },
  },
  logo: {
    backgroundColor: '#3daea1',
    fontSize: '15px',
    borderRadius: '0px',
    display: 'flex',
    height: '38px',
    color: 'white',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '#ccc',
      color: '#000'
    }
  }
}
export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [logo,] = React.useState(LOGO1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ backgroundColor: 'black', fontSize: '15px', position: 'fixed', top: 0, width: '100%' }}>
      <Grid container sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid item >
          <Button
            sx={styles.logo}>
            <ul style={{ listStyle: 'none', textTransform: 'none', margin: '0px', padding: '0px' }}>
              <li>
                <Link activeClass="active" to={"Home"} spy={true} smooth={true}>
                  <img width='15px' src={logo} alt="logo" style={{ borderRadius: "20%", marginRight: "15px", marginLeft: "10px", marginTop: "5px" }} />
                  Logo
                </Link>
              </li>
            </ul>
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Box sx={styles.helpCenter}>
            {options.map((option, index) => (
              <>
                <Button
                  key={option}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#FFF', color: '#000'
                    },
                    borderRadius: '0px',
                    display: 'flex',
                    height: '38px',
                    color: 'white',
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  {index !== options.length - 1 ? <ul style={{ margin: 0, padding: 0, listStyle: 'none', textTransform: 'none', display: "flex", justifyContent: "center" }}><li><Link activeClass="active" to={option} spy={true} smooth={true}>{option}</Link></li></ul>
                    :
                    <Button
                      sx={{
                        '&:hover': {
                          backgroundColor: '#FFF', color: '#000'
                        },
                        borderRadius: '0px',
                        display: 'flex',
                        height: '38px',
                        color: 'white',
                        borderColor: 'rgba(0, 0, 0, 0.2)',
                        textAlign: 'center',
                        textTransform: 'none'
                      }} onMouseOver={handleHover}
                    >
                      Dropdown
                    </Button>
                  }
                </Button>
              </>
            ))}
          </Box>
        </Grid>
        <Grid item>
          <SearchIcon sx={{ display: "flex", justifyContent: "Right", margin: 0, padding: 0, color: 'white', margin: '5px' }} />
        </Grid>
      </Grid>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'white' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Grid container display={'flex'} justifyContent="right">
          <Grid item>
            <Button
              sx={{...styles.logo, height:'50px'}}>
              <ul style={{ listStyle: 'none', textTransform: 'none', margin: '0px', padding: '0px' }}>
                <li>
                  <Link activeClass="active" to={"Home"} spy={true} smooth={true}>
                    <img width='15px' src={logo} alt="logo" style={{ borderRadius: "20%", marginRight: "15px", marginLeft: "10px", marginTop: "5px" }} />
                    Logo
                  </Link>
                </li>
              </ul>
            </Button>
          </Grid>
          <Grid item>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {options.map((option, index) => (
                index !== options.length - 1 ?
                  <MenuItem onClick={handleCloseNavMenu}>
                    <ul style={{ ...styles.ul, display: "flex", justifyContent: "Left", margin: 0, padding: 0 }}>
                      <li>
                        <Link activeClass="active" to={option} spy={true} smooth={true}>
                          {option}
                        </Link>
                      </li>
                    </ul>
                  </MenuItem>
                  : <MenuItem><ul style={{ ...styles.ul, display: "flex", justifyContent: "Left", margin: 0, padding: 0 }}>
                    <li>
                      <Link activeClass="active" to={option} spy={true} smooth={true}>
                        Search
                      </Link>
                    </li>
                  </ul></MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>

      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ paddingRight: '90px' }} onClick={handleClose}><ul style={{ margin: 0, padding: 0, listStyle: 'none', textTransform: 'none', display: "flex", justifyContent: "center" }}><li><Link activeClass="active" to='Home' spy={true} smooth={true}>Link</Link></li></ul></MenuItem>
        <MenuItem sx={{ paddingRight: '90px' }} onClick={handleClose}><ul style={{ margin: 0, padding: 0, listStyle: 'none', textTransform: 'none', display: "flex", justifyContent: "center" }}><li><Link activeClass="active" to='Home' spy={true} smooth={true}>Link</Link></li></ul></MenuItem>
        <MenuItem sx={{ paddingRight: '90px' }} onClick={handleClose}><ul style={{ margin: 0, padding: 0, listStyle: 'none', textTransform: 'none', display: "flex", justifyContent: "center" }}><li><Link activeClass="active" to='Home' spy={true} smooth={true}>Link</Link></li></ul></MenuItem>
      </Menu>
    </Box>
  );
};

