import * as React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export default function Part2({handle}) {
    const contents = ['/snow.jpg', '/lights.jpg', '/sailboat.jpg']
    return (
        <Box id='Work'>
            <Box sx={{
                backgroundColor: '#333333',
                color: 'white',
                paddingLeft: '2%',
                paddingRight: '2%',
                marginTop: '40px',
                paddingBottom: '70px',
                border: '1px solid #D9E5E9',
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Box sx={{
                            marginTop: '76px',
                            marginBottom: '15px',
                            fontSize: '36px',
                        }}>
                            Our Work
                        </Box>
                        <Box sx={{
                            fontSize: '16px',
                            fontFamily: 'Gilroy'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Box>
                    </Grid>
                    {contents.map((content, index) => (
                        <Grid item xs={12} sm={3}>
                            <Box sx={{
                                marginTop: '76px',
                                backgroundColor: 'white',
                                color: 'black'
                            }}>
                                <img width='100%' height='100%' src={content} />
                                <Box sx={{ margin: '15px', paddingBottom: '10px' }}>
                                    <Box sx={{
                                        margin: '10px 0',
                                        fontSize: '24px',
                                    }}>Customer {index + 1}</Box>
                                    <Box sx={{
                                        margin: '10px 0',
                                        fontSize: '20px',
                                    }}>Trade</Box>
                                    <Box sx={{
                                        margin: '15px 0',
                                        fontSize: '15px',
                                    }}>Blablabla</Box>
                                    <Box sx={{
                                        margin: '15px 0',
                                        fontSize: '15px',
                                    }}>Blablabla</Box>
                                    <Box sx={{
                                        margin: '15px 0',
                                        fontSize: '15px',
                                    }}>Blablabla</Box>
                                    <Box sx={{
                                        margin: '15px 0',
                                        fontSize: '15px',
                                    }}>Blablabla</Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                    }
                </Grid>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                paddingRight: '2%',
                marginTop: '-20px'
            }}>
                <IconButton onClick={handle} sx={{
                    backgroundColor: '#3daea1',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#ccc',
                        color: '#000'
                    }
                }} aria-label="upload picture" component="span">
                    <AddIcon />
                </IconButton>
            </Box>
        </Box>
    );
}