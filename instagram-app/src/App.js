import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Post from './Components/Main/Post/Post';

import './App.css';

const App = () => {
  // POSTS CONTENT
  const[posts, setPosts] = useState([
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
    <div className="App">
      <Header />

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>  
  );
}

export default App;
