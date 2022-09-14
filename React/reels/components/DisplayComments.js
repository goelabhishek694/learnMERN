import { Avatar } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";

function DisplayComments({ postData }) {
  const [allComments, setAllComments] = useState(null);
  useEffect(async () => {
    let tempArray = [];
    postData.comments.map(async (commentId) => {
      const docSnap = await getDoc(doc(db, "comments", commentId));
      tempArray.push(docSnap.data());
    });
    setAllComments(tempArray);
  }, [postData]);
  return (
    <div>
      {allComments == null ? (
        <CircularProgress color="success" />
      ) : (
        <>
          {allComments.map((commentObj) => {
            return (
              <div>
                <Avatar src={commentObj.userDP} />
                <p>
                  <span>{commentObj.userName}</span>
                  {commentObj.text}
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default DisplayComments;
