import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './RightContent.css';

const RightContent = () => {

    return (
        <div className="rightcontent">
            {/* RIGHTCONTENT AVATAR */}
            <Avatar 
                className="rightcontent__avatar"
                src="https://pbs.twimg.com/profile_images/1265991516868292608/jS5MqCqF.jpg"
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
                            src="https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2994,w_4500/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2017%2F08%2FGrey-Worm-Casterly-Rock-Official.jpg"
                        />
                        <div>
                            <a href="#">
                                Torgo Nudho
                            </a>
                            <span>Maybe it can interest you</span>
                        </div>
                    </li>
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://i.pinimg.com/originals/26/7c/39/267c39692cb099c4f40c3ae279d245b9.jpg"
                        />
                        <div>
                            <a href="#">
                                Night's Watchers
                            </a>
                            <span>Maybe it can interest you</span>
                        </div>
                    </li>
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://i.pinimg.com/originals/c4/21/b7/c421b7a7faf3fcbf8dcfc9b998e542cb.jpg"
                        />
                        <div>
                            <a href="#">
                                Thoros of Myr
                            </a>
                            <span>Maybe it can interest you</span>
                        </div>
                    </li>
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://img.huffingtonpost.com/asset/597b43c21a00009bc1dc0fa6.jpeg?cache=pstjbxshjvops=1778_1000"
                        />
                        <div>
                            <a href="#">
                                Hot Pie
                            </a>
                            <span>Maybe it can interest you</span>
                        </div>
                    </li>
                    <li>
                        <Avatar 
                            className="rightcontent__ulavatar"
                            src="https://media1.popsugar-assets.com/files/thumbor/LQMuyxVmudJlhy-2Oi6-GyPwoBk/511x0:2611x2100/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/14/581/n/44631456/f80f37325cdabb0b460862.32987426_/i/Who-Did-Varys-Send-Note-Game-Thrones.png"
                        />
                        <div>
                            <a href="#">
                                Lord Varis
                            </a>
                            <span>Maybe it can interest you</span>
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
            <span>@2021 INSTAGRAM FROM MATTEO RASCIONI</span>
        </div>
    )
}

export default RightContent;
