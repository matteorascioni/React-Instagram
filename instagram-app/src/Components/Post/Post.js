import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './Post.css'

const Post = ({ username, caption, imageUrl }) => {
    
    return(
        <div className="Post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>    
            </div>
                
            <div className="post__main">
                <img 
                    className="post__image" 
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" 
                    alt=""
                />
            </div>
          
            <div className="post__footer">
                <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
            </div>  
        </div>
    )
}

export default Post