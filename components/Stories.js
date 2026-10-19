import { array, number, username } from "minifaker";
import "minifaker/locales/en";
import { connection } from "next/server";
import Story from "./Story";


export default async function Stories() {
  await connection();

  //We use minifaker to import fictive users
  //For images, we use Pravatar.cc - each obj has img, username and id. 
  const storyUsers = array(20, (i) => (
      {
          //Get English names, switch everything to lowercase like on Instagram
          username: username({locale: 'en'}).toLowerCase(),
          //Import images from Pravatar.cc, random number from 1-70
          img: `https://i.pravatar.cc/150?img=${number({ min: 1, max: 70 })}`,
          id: i
      }
  ));

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-auto rounded-sm scrollbar-none">
        {storyUsers.map(user => (
            <Story key={user.id} username={user.username} img={user.img} />
        ))}
    </div>
  )
}