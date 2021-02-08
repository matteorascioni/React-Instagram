import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './RightContent.css';

const RightContent = () => {

    return (
        <div className="rightcontent">
            {/* RIGHTCONTENT AVATAR */}
            <Avatar 
                className="rightcontent__avatar"
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3Dixlib=rb-1.2.1auto=formatfit=cropw=2089q=80"
            />
            
            {/* RIGHT CONTENT TEXT */}
            <div className="rightcontent__text">
                <h3>Suggestions For You</h3>
                <a href="#">See All</a>
            </div>

            {/* RIGHTCONTENT UL */}
            <div className="rightcontent__ulcontainer">
                {/* LEFT UL */}
                <ul className="rightcontent__ulleft">     
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3Dixlib=rb-1.2.1auto=formatfit=cropw=2089q=80"
                        />
                        <div>
                            <a href="#">
                                blablabla
                            </a>
                            <span>Follows you</span>
                        </div>
                    </li>
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3Dixlib=rb-1.2.1auto=formatfit=cropw=2089q=80"
                        />
                        <div>
                            <a href="#">
                                blablabla
                            </a>
                            <span>Follows you</span>
                        </div>
                    </li>
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3Dixlib=rb-1.2.1auto=formatfit=cropw=2089q=80"
                        />
                        <div>
                            <a href="#">
                                blablabla
                            </a>
                            <span>Follows you</span>
                        </div>
                    </li>
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3Dixlib=rb-1.2.1auto=formatfit=cropw=2089q=80"
                        />
                        <div>
                            <a href="#">
                                blablabla
                            </a>
                            <span>Follows you</span>
                        </div>
                    </li>
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3Dixlib=rb-1.2.1auto=formatfit=cropw=2089q=80"
                        />
                        <div>
                            <a href="#">
                                blablabla
                            </a>
                            <span>Follows you</span>
                        </div>
                    </li>
                </ul>

                {/* RIGHT UL */}
                <ul className="rightcontent__ulright">
                    <li>
                        <a href="#">Follow</a>
                    </li>
                    <li>
                        <a href="#">Follow</a>
                    </li>
                    <li>
                        <a href="#">Follow</a>
                    </li>
                    <li>
                        <a href="#">Follow</a>
                    </li>
                    <li>
                        <a href="#">Follow</a>
                    </li>
                </ul>
            </div>
            <span>@2021 Instagram from Facebook</span>
        </div>
    )
}

export default RightContent;
