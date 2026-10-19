"use client";

import { useEffect, useState } from "react";

export default function PostsClient({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);

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
        <article key={post.id} className="flex flex-col">
          <img
            className="h-14 w-14 m-2 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
            src={post.userImage}
            alt={`${post.username}'s profile`}
            width={40}
            height={40}
          />
          <p className="text-left ml-2">{post.username}</p>
          {post.image && <img src={post.image} alt={post.imageAlt} />}
          <span className="h-1 bg-gray-200 mt-2 mb-4"></span>
        </article>
      ))}
    </div>
  );
}
