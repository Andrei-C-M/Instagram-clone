import { array, number, username } from "minifaker";
import "minifaker/locales/en";
import { connection } from "next/server";
import PostsClient from "./PostsClient";

export default async function Posts() {
  await connection();

  //Create an array with 10 posts
  //This is a server component

  const initialPosts = array(10, (id) => ({
    id: String(id + 1),
    username: username({ locale: "en" }).toLowerCase(),
    userImage: `https://i.pravatar.cc/150?img=${number({ min: 1, max: 70 })}`,
    image: "",
    imageAlt: "",
    caption: "This is awesome!",
  }));

  return <PostsClient initialPosts={initialPosts} />;
}
