import React, { useState } from 'react'; 
import Post from './Post/Post';
import RightContent from './RightContent/RightContent';

import './Main.css';

const Main = () => {
    // POSTS CONTENT
    const [posts, setPosts] = useState([
        {
            username: "Jon__Snow",
            caption: "Ghost #cute#mysunshine#nightswatch",
            avatar: "https://www.justnerd.it/wp-content/uploads/2015/04/jon-snow-e1467209484801.jpg",
            imageUrl: "https://images.unsplash.com/photo-1575336744822-320dcbd1d57d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
            username: "Eddard_Ned_Stark",
            caption: "Miss this! #myplace#winteriscoming",
            avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brienne-ned-game-of-thrones-1556025697.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=980:*",
            imageUrl: "https://images.unsplash.com/photo-1570449041836-d29d89a22bc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        },
        {
            username: "TyrionDwarfLannister",
            caption: "Damn buddy really? I saved the city! #blackwaterbattle#sirbronn",
            avatar: "http://www.intravino.com/wp-content/uploads/Tyrion-Lannister-Wine.jpg",
            imageUrl: "https://images.unsplash.com/photo-1586691078450-72678cfbf10b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        },
        {
            username: "AryaStark666",
            caption: "I love my fans #graffitibyfan#got#redgod#nottoday#howmanyfaces?",
            avatar: "https://s3.r29static.com/bin/entry/74a/720x1009,85/2171313/image.webp",
            imageUrl: "https://images.unsplash.com/photo-1585943766731-05822da58574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        },
        {
            username: "therealhound",
            caption: "#fuckoff#lol#newcoverimage#brienneoffuckingtarth",
            avatar: "https://upload.wikimedia.org/wikipedia/en/5/59/The_Hound_in_%27The_Children%27.jpg",
            imageUrl: "https://pbs.twimg.com/media/DIV7MgCXkAI9_ag?format=jpg&name=medium",
        },
    ]);

    return (
        <div className="main">
            {/* LEFT MAIN */}
            <div className="main__left">
                {
                    posts.map(post => (
                        <Post 
                            username={ post.username } 
                            caption={ post.caption } 
                            avatar={ post.avatar } 
                            imageUrl={ post.imageUrl } 
                        />
                    ))
                }
            </div>
            
            {/* RIGHT MAIN */}
            <div className="main__right">
                <RightContent />
            </div>
        </div>
    )
}

export default Main;
