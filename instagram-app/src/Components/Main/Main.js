import React, { useState } from 'react'; 
import Post from './Post/Post';
import IgContent from './IgContent/IgContent';

import './Main.css';

const Main = () => {
    // POSTS CONTENT
    const [posts, setPosts] = useState([
        {
        username: "Matteo Rascioni",
        caption: "Hello World!",
        imageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
        },
        {
        username: "Livia Ciccia",
        caption: "Hello guys I'm Livia!",
        imageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
        },
        {
        username: "Manuel Valente",
        caption: "Hello there!",
        imageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
        },
    ]);

    return (
        <div className="main">

            {/* POSTS */}
            {
                posts.map(post => (
                    <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
                ))
            }

            {/* IG CONTENT */}
            <IgContent />
        </div>
    )
}

export default Main;
