import React from 'react'
import TextField from "@mui/material/TextField";
import Image from "next/image"
import logo from '../../assets/Instagram.jpeg'
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import IconButton from "@mui/material/IconButton";
import Link from 'next/link'
function index() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <Image src={logo} />
        <TextField
          id="outlined-basic"
          size="small"
          label="Email"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <Button
          color="secondary"
          variant="outlined"
          component="label"
          fullWidth
          size="small"
        >
          <IconButton color="secondary">
            <CloudUploadIcon />
          </IconButton>
          Upload Profile Image
          <input hidden accept="image/*" multiple type="file" />
        </Button>

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          component="label"
          fullWidth
        >
          Sign Up
        </Button>
        <div className="tnc">
          By signing up, you agree to our Terms, Conditions and Cookies policy.
        </div>
      </div>
      <div className="bottom-card">
        Already Have an account ?{" "}
        <Link href='/login'>
          <span style={{ color: "blueviolet" }}>Login</span>
        </Link>
      </div>
    </div>
  );
}

export default index