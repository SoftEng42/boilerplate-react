import React from 'react';
import {
  Button,
  TextField,
  Typography
} from '@material-ui/core';


const Signin = props => {

  return (
    <div className="hv-center full-container text-center">
      <div>
        <Typography variant="h2" className="mb-3">
          Sign in
        </Typography>
        <TextField
          fullWidth
          label="Email address"
          name="email"
          type="text"
          variant="outlined"
          className="mt-2"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          className="mt-2"
        />
        <Button
          color="primary"
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          className="mt-3"
        >
          Sign in now
        </Button>
      </div>
    </div>
  );
}

export default Signin;
