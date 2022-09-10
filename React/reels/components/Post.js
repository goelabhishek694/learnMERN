import React from 'react'
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Post({ postData }) {
    console.log("123456",postData);
    return (
      <div className="post-container">
        <video src={postData.postURL} />
        <div className="videos-info">
          <div className="avatar-container">
            <Avatar
              alt="Remy Sharp"
              src={postData.profilePhotoURL}
              sx={{ margin: "0.5rem" }}
            />
            <p>{postData.profileName}</p>
          </div>
          <div className="post-like">
            <FavoriteIcon />
                    <p>{postData.likes.length }</p>
          </div>
        </div>
      </div>
    );
}

export default Post