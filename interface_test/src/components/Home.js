import { Button, DialogContentText } from '@mui/material';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <div id='Home'>
      <img sx={{ top: '0px' }} src='/sailboat.jpg' width='100%' height='500px' maxHeight='600px' />
      <Button onClick={handleOpen} sx={{
        fontSize: '24px', top: '-70px', marginLeft: '20px', backgroundColor: 'black', color: 'white', '&:hover': {
          backgroundColor: '#3daea1',
        }
      }}>LEARN W3.CSS</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
        fullWidth
      >
        <DialogTitle id="alert-dialog-title" sx={{backgroundColor:'#3daea1', color: '#fff', padding:'0 16px'}}>
          <Box sx={{margin:'10px 0', size:'20px'}}>Oh snap! We just showed you a modal..</Box>
          <Box sx={{margin:'10px 0', size:'20px'}}>Because we can</Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{padding:'0 16px'}}>
            <Box sx={{margin:'15px 0', size:'15px'}}>Cool huh? Ok, enough teasing around..</Box>
            <Box sx={{margin:'15px 0', size:'15px'}}>Go to our <a href='www.w3school.com'>W3.CSS Tutorial</a> to learn more!</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{backgroundColor:'#3daea1', color: '#fff', display:'flex', textAlign:'left', paddingRight:'100%'}}>
        Modal footer
        </DialogActions>
      </Dialog>
    </div>
  )
}