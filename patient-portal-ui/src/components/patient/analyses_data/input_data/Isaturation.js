import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

class Isaturation extends Component {
    // render() {
    //     return (
    //         <Box sx={{ width: 1 , mt:1.5}}>
    //             <TextField
    //                 label="Saturation"
    //                 id="Isaturation"
    //                 sx={{ width: 0.8 }}
    //                 InputProps={{
    //                     startAdornment: <InputAdornment position="start">%</InputAdornment>,
    //                 }}
    //             />
    //             <IconButton
    //                 variant="outlined"
    //                 size="large"
    //                 edge="start"
    //                 color="inherit"
    //                 aria-label="menu"
    //                 sx={{  ml:0.1,  width: 0.1 }}
    //             >
    //                 <AddIcon color="#fff" />
    //             </IconButton>
    //         </Box>
    //     );
    // }
    render() {
        return (
            <Box
                component="span"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="40"
            >
                <Typography variant="body1" display="inline" sx={{ width: 0.5 }}>Diuresis</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', width: 0.3, }} display="inline">25%</Typography>
                <Typography variant="body1" align="right" display="inline" sx={{ }}><EditIcon sx={{ ml: 1 }} /></Typography>
                <Typography variant="body1" align="right" display="inline" sx={{  }}><DeleteIcon sx={{ ml: 1 }} /></Typography>
            </Box>
        );
    }
}
export default Isaturation;