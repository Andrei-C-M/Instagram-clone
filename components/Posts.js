"use client";

import { useEffect, useState } from "react";
// import Post from "./Post";


export default function Posts() {
  const [posts, setPosts] = useState([
    {
        id: "1",
        username: "JohnDoe",
        userImage: "https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}",
        image: "",
        imageAlt: "",
        caption: "Nice picture"
    }
  ]);
  useEffect(() => {
    async function loadPhoto() {
      const response = await fetch("/api/random-photo");

      if (!response.ok) {
        throw new Error("Could not load a photo from Unsplash");
      }

      const photo = await response.json();

      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === "1"
            ? {
                ...post,
                image: photo.urls.regular,
                imageAlt:
                  photo.alt_description ||
                  photo.description ||
                  "Photo from Unsplash",
              }
            : post
        )
      );
    }

    loadPhoto().catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <p>{post.username}</p>
          {post.image && <img src={post.image} alt={post.imageAlt}/>}
        </article>
      ))}
    </div>
  );
}