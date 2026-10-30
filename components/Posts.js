import { array, number, username } from "minifaker";
import "minifaker/locales/en";
import { connection } from "next/server";
import PostsClient from "./PostsClient";
import Image from "next/image";

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

  return (
    <div>
      {/* Posts header */}
      <div className="">
                <Image
                    className="w-18 p-2 h-auto rounded-full cursor-pointer hover:scale-115 transition-transform duration-200 ease-out"
                    src="/images/avatar.jpg"
                    alt="Profile photo"
                    width={ 100 }
                    height={ 100 }
                />

      </div>
      <PostsClient initialPosts={initialPosts} />;
    </div>
  )
}
