import { Button, IconButton, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import MovieIcon from "@mui/icons-material/Movie";
import Alert from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebase";
function Upload({userData}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);
  const fileLimit = 50;
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file == null) {
      setError("file not selected");
      setTimeout(() => { setError('') }, 2000);
      return;
    }
    if ((file.size / (1024 * 1024)) > fileLimit) {
      setError(`file too large, try uploading a file less than ${fileLimit} MB`);
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    let uid = uuidv4();
    setLoading(true);
    // Upload file and metadata to the object 'images/mountains.jpg'
                                            // userid/post/uid
      const storageRef = ref(storage, `${userData.uid}/post/${uid}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const prog =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(prog);
          console.log("Upload is " + prog + "% done");
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          console.log(error);
          setError(error);
          setTimeout(() => { setError('') }, 2000);
          return;
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            let postObj = {
              likes: [],
              postId: uid,
              postURL: downloadURL,
              profileName: userData.name,
              profilePhotoURL: userData.downloadURL,
              userId:userData.uid,
              timestamp:serverTimestamp(),
            }

            console.log("post", postObj);
            await setDoc(doc(db, "posts", uid), postObj);
            console.log("posts added to post collection");
                            // db,collection name, document name
            // await setDoc(doc(db, "users", userInfo.user.uid), userData);
            // console.log("doc added to db");

          });
        }
      );
      console.log("user signed up");
    
  }
  return (
    <div className="upload-btn">
      {error != '' ?
        <Alert severity="error">{error}</Alert>
        :
        <Button
          color="secondary"
          variant="outlined"
          component="label"
          size="large"
          startIcon={<MovieIcon />}
        >
          Upload Video
          <input hidden accept="video/*" type="file" onChange={handleChange}/>
        </Button>
      }
      {loading &&
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={progress}
          sx={{ mt: "0.2rem" }}
        />
      }
    </div>
  );
}

export default Upload;
