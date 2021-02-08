import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import './Post.css'

const Post = ({ username, caption, avatar, imageUrl }) => {
    
    return(
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    src={ avatar }
                />
                <h4>{ username }</h4>    
            </div>
                
            <div className="post__main">
                <img 
                    className="post__image" 
                    src={ imageUrl }
                    alt=""
                />
            </div>
          
            <div className="post__footer">
                <ul>
                    <li>
                        <FontAwesomeIcon className="post__icon" icon={ faHeart } />
                    </li>
                    <li>
                        <FontAwesomeIcon className="post__icon" icon={ faComment }/>
                    </li>
                    <li>
                        <FontAwesomeIcon className="post__icon" icon={ faPaperPlane } />
                    </li>
                </ul>
                <h4 className="post__text"><strong>{ username }</strong> { caption }</h4>
            </div>  
        </div>
    )
}

export default Post;