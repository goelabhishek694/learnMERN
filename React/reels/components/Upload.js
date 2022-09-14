import { Button, IconButton, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import MovieIcon from "@mui/icons-material/Movie";
import Alert from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebase";
function Upload({ userData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file == null) {
      setError("please select a file");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (file.size / (1024 * 1024) > 50) {
      setError("please select a smaller file size");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    let uid = uuidv4();
    setLoading(true);

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `${userData.uid}/posts/${uid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log("afte storageref and upload task", storageRef, uploadTask);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
        console.log("Upload is " + prog + "% done");
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        console.log(error);
        setError(error);
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          let post = {
            likes: [],
            comments: [],
            postId: uid,
            postURL: downloadURL,
            profileName: userData.fullName,
            profilePhotoURL: userData.downloadURL,
            uid: userData.uid,
            timestamp: serverTimestamp(),
          };
          console.log("post", post);
          await setDoc(doc(db, "posts", uid), post);
          console.log("posts added to post collection");

          //update in users, posts ka arr 
          await updateDoc(doc(db, "users", userData.uid), {
            posts: arrayUnion(uid),
          });
          console.log("posts array added to user doc");
          
        });
      }
    );
    console.log("signed up");
  };
  return (
    <div className="upload-btn">
      {error != "" ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Button
          color="secondary"
          variant="outlined"
          component="label"
          size="large"
          startIcon={<MovieIcon />}
        >
          Upload Video
          <input hidden accept="video/*" type="file" onChange={handleChange} />
        </Button>
      )}
      {loading && (
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={progress}
          sx={{ mt: "0.2rem" }}
        />
      )}
    </div>
  );
}

export default Upload;

