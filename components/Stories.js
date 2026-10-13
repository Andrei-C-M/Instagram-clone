import minifaker from 'minifaker';
import "minifaker/locales/en"
import { log } from 'node:console';
import { useState, useEffect } from 'react';


export default function Stories() {
  //We use minifaker to import fictive users
  //For images, we use Pravatar.cc 
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    minifaker.load('en');
    const storyUsers = minifaker.array(20, (i) => (
        {
            username: minifaker.username({locale: 'en'}),
            //import images from Pravatar.cc, random number from 1-70
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`
            id: i

        }
    ));
    setStoryUsers(storyUsers);
    
  }, []);

  return (
    <div>

    </div>
  )
}