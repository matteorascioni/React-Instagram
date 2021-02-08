import React, { useState } from 'react'; 
import Post from './Post/Post';
import RightContent from './RightContent/RightContent';

import './Main.css';

const Main = () => {
    // POSTS CONTENT
    const [posts, setPosts] = useState([
        {
            username: "Matteo Rascioni",
            caption: "Hello World!",
            avatar: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            imageUrl: "https://images.unsplash.com/photo-1611845528017-75215e6d662c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        },
        {
            username: "Livia Ciccia",
            caption: "Hello guys I'm Livia!",
            avatar: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            imageUrl: "https://images.unsplash.com/photo-1611599738437-740eade51365?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
            icons: {
                icon: "far fa-heart",
                icon: "far fa-comment",
                icon: "far fa-paper-plane",
            }
        },
        {
            username: "Manuel Valente",
            caption: "Hello there!",
            avatar: "https://images.unsplash.com/photo-1520592978680-efbdeae5d036?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
            imageUrl: "https://images.unsplash.com/photo-1612280073271-f9f202443b5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
