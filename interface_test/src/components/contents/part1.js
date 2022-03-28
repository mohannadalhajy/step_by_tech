import * as React from 'react';
import { Box, Grid } from '@mui/material';

export default function Part1() {
    const members = [{name: "Johnny Walker", position: "Web Designer"},{name: "Rebecca Flex", position: "Support"},{name: "Jan Ringo", position: "Boss man"},{name: "Kai Ringo", position: "Fixer"}]
    return (
        <Box id='Team'
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
                OUR TEAM
            </Box>
            <Box sx={{
                fontFamily: 'Gilroy',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '93.47%',
                textAlign: 'center',
                paddingBottom: '25px'
            }}>
            Meet the team - our office rats:
            </Box>
            <Grid container spacing={10} alignItems="center" justifyContent="center">
                {members.map(member=>(
                    <Grid sx={{textAlign:'center'}} item xs={12} sm={6} md={3}>
                        <img width={125} style={{borderRadius:'75px'}} src='person.png'/>
                        <Box sx={{fontSize:'24px', margin:'10px 0px'}}>{member.name}</Box>
                        <Box sx={{fontSize:'15px', margin:'15px 0px'}}>{member.position}</Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}