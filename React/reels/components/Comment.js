import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { v4 as uuidv4 } from "uuid";

function Comment({ userData, postData }) {
    // console.log("123", userData);
  const [comment, setComment] = useState("");

  const handleComment = async () => {
    let uid = uuidv4();
    const obj = {
      text: comment,
      userDP: userData.downloadURL,
      userName: userData.fullName,
      CommentId: uid,
      postId: postData.postId,
    };
    await setDoc(doc(db, "comments", uid), obj);
    await updateDoc(doc(db, "posts", postData.postId), {
      comments: arrayUnion(uid),
    });
      setComment('');
  };
  return (
    <div style={{ width: "100%" }}>
      {/* comment */}
      <TextField
        id="outlined-basic"
        label="Add Comment"
        variant="outlined"
        size="small"
        sx={{ width: "70%" }}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      {/* button */}
      <Button variant="contained" onClick={handleComment}>
        Post
      </Button>
    </div>
  );
}

export default Comment