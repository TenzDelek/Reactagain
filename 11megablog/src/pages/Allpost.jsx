import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/Config";
const Allpost = () => {
  const [post, setpost] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((data) => {
    if (data) {
      setpost(data.documents);
    }
  });
  return (
    <div className=" w-full py-8">
      <Container>
        <div className=" flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className=" p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Allpost;
