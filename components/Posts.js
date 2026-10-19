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
        caption: "This is awesome!"
    },
        {
        id: "2",
        username: "JohnDoe",
        userImage: "https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}",
        image: "",
        imageAlt: "",
        caption: "This is awesome!"
    },
        {
        id: "3",
        username: "JohnDoe",
        userImage: "https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}",
        image: "",
        imageAlt: "",
        caption: "This is awesome!"
    }
  ]);
  useEffect(() => {
    const postsWithoutImages = posts.filter((post) => !post.image);
    if (postsWithoutImages.length === 0) return;

    const controller = new AbortController();

    async function loadPhotos() {
      const results = await Promise.allSettled(
        postsWithoutImages.map(async (post) => {
          const response = await fetch("/api/random-photo", {
            signal: controller.signal,
          });

          if (!response.ok) {
            throw new Error(
              `Could not load a photo for post ${post.id} (status ${response.status})`
            );
          }

          const photo = await response.json();
          if (!photo.urls?.regular) {
            throw new Error(`Unsplash returned no image URL for post ${post.id}`);
          }

          return {
            id: post.id,
            image: photo.urls.regular,
            imageAlt:
              photo.alt_description ||
              photo.description ||
              "Photo from Unsplash",
          };
        })
      );

      if (controller.signal.aborted) return;

      const photosByPostId = new Map();
      results.forEach((result) => {
        if (result.status === "fulfilled") {
          photosByPostId.set(result.value.id, result.value);
        } else {
          console.error(result.reason);
        }
      });

      if (photosByPostId.size === 0) return;

      setPosts((currentPosts) =>
        currentPosts.map((post) => ({
          ...post,
          ...(photosByPostId.get(post.id) || {}),
        }))
      );
    }

    loadPhotos().catch((error) => {
      if (!controller.signal.aborted) console.error(error);
    });

    return () => controller.abort();
  }, [posts]);

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