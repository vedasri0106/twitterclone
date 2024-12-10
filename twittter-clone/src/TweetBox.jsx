import React, { useState } from "react";
import "./TweetBox.css";
 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import db from "./firebase";


function TweetBox() {
  return (
     <div className="tweetBox">
        <form>

            <div className="tweetBox__input">
       <AccountCircleIcon src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
     <input placeholder="What's happening" type="text"/>
     </div>

     <input className="tweetBox__imageInput" placeholder="Optional:Enter image URL" type="text"/>
      <button className="tweetBox__tweetButton">Tweet</button>
    </form>
   </div>

  );
}

export default TweetBox;