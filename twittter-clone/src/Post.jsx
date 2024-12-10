import React,{ forwardRef } from 'react'
import "./Post.css"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <AccountCircleIcon src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {/* {displayName}{" "} */}


                vedhashree
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {/* {username} */}
                  vedhasreeputta
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              {/* <p>{text}</p> */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Quam, quis ducimus. Molestias inventore rerum<br></br> ipsum nisi dolorum harum laudantium fugiat!</p>
            </div>
          </div>
          <img src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNi90cDI3OC10d2l0dGVycG9zdC0yNC00ODMtbDRxcHJtdncuanBn.jpg" width="400px" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />

            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
// const Post = () => {
// {displayName,
// userName,
// verified,
// text,
// image,
// avatar}
//   return (
//     <div className="post">
      
//     <div className="post__avatar">
//     <AccountCircleIcon src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>

//     </div> 
//     <div className="post__body">
//           <div className="post__header">
//             <div className="post__headerText">
//               <h3>
//                 {/* {displayName}{" "} */}
//                 <span className="post__headerSpecial">
//                   {/* {verified &&  */}
//                   <VerifiedUserIcon className="post__badge" />
//                   {/* } @ */}
//                   {/* {username} */}
//                 </span>
//               </h3>
//             </div>
//             <div className="post__headerDescription">
//               <p>
//                 {/* {text} */}
//                 </p>
//             </div>
//           </div>
//           <img src={image} alt="" />
//           <div className="post__footer">
//             <ChatBubbleOutlineIcon fontSize="small" />
//             <RepeatIcon fontSize="small" />
//             <FavoriteBorderIcon fontSize="small" />
//             <PublishIcon fontSize="small" />
//           </div>
//         </div>
    
//     </div>
//   )
// }


// export default Post;
// forwardRef. This allows the component to receive a ref from a parent component, enabling it to be referenced in the DOM for possible direct manipulations (e.g., for scrolling or focusing).
