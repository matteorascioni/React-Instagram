import React, {useState} from 'react';
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
                    src={imageUrl}
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