import React from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import logo from "../../assets/Instagram.jpeg";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import IconButton from "@mui/material/IconButton";

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

        <div style={{color:"blue", marginTop:"0.5rem"}}>Forget Password </div>

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          component="label"
          fullWidth
        >
          Log in
        </Button>
      </div>
      <div className="bottom-card">
        Don't Have an account ?{" "}
        <span style={{ color: "blueviolet" }}>Signup</span>
      </div>
    </div>
  );
}

export default index;
