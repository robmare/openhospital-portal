import * as React from 'react';
import { Link } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const GoHomePatient = ({ setAuth }) => {
  return (
    <IconButton
      variant="outlined"
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      to="/PatientHome"
      component={Link}
    >
      <HomeOutlinedIcon color="inherit" />
    </IconButton>
  );
};

export default GoHomePatient;