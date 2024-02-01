import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/Config";
import { Container, PostCard } from "../components";
const Home = () => {
  const [post, setpost] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setpost(posts.documents);
      }
    });
  }, []);
  if (post.length === 0) {
    return (
      <div className=" w-full py-8 mt-4 text-center">
        <Container>
          <div className=" flex flex-wrap">
            <div className=" p-2 w-full">
              <h1 className=" text-2xl font-bold hover:text-gray-500">
                Login to read Post
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className=" w-full py-8">
      <Container>
        <div className=" flex flex-wrap">
          {post.map((data) => (
            <div key={data.$id} className=" p-2 w-1/4">
              <PostCard {...data} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
