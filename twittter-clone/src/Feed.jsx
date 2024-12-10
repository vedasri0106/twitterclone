import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
// import { getFirestore, collection,onSnapshot } from "firebase/firestore"; // Correct Firestore imports

// import {db} from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  // // useEffect(() => {
  // //   db.collection("posts").onSnapshot((snapshot) =>
  // //     setPosts(snapshot.docs.map((doc) => doc.data()))
  // //   );
  // // }, []);
  // useEffect(() => {
  //   // Get Firestore instance from the imported `db` (which should be properly initialized)
  //   const firestore = getFirestore(db);

  //   // Reference the "posts" collection in Firestore
  //   const postsCollection = collection(firestore, "posts");

  //   // Use onSnapshot for real-time updates to the posts collection
  //   const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
  //     setPosts(snapshot.docs.map((doc) => doc.data())); // Extract data from each document
  //   });

  //   // Cleanup listener when the component unmounts
  //   return () => unsubscribe();
  // }, []); // Empty dependency array ensures this runs once when the component mounts


  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
          
        ))}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

                </FlipMove>
    </div>
  );
}

export default Feed;