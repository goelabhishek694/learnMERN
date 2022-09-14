import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Comment() {
  return (
    <div style={{width:'100%'}}>
      {/* comment */}
      <TextField
        id="outlined-basic"
        label="Add Comment"
        variant="outlined"
        size="small"
        sx={{width:'70%'}}
      />
      {/* button */}
      <Button variant="contained">Post</Button>
    </div>
  );
}

export default Comment