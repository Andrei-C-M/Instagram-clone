"use client";

import { array, username } from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";


export default function Stories() {
  //We use minifaker to import fictive users
  //For images, we use Pravatar.cc - each obj has img, username and id. 
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const storyUsers = array(20, (i) => (
        {   
            //Get English names, switch everything to lowercase like on Instagram
            username: username({locale: 'en'}).toLowerCase(),
            //Import images from Pravatar.cc, random number from 1-70
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i
        }
    ));
    setStoryUsers(storyUsers);
    
  }, []);

  return (
    <div>
        {storyUsers.map(user => (
            <Story key={user.id} username={user.username} img={user.img} />
        ))}
    </div>
  )
}