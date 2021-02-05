import React from 'react';
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <Header />

      <Post 
        username="Matteo Rascioni"
        caption ="Ciao sono Matteo"
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" 
      />
      <Post 
        username="Livia Ciccia"
        caption ="Ciao sono Livia"
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" 
      />
      <Post 
        username="Manuel Valente"
        caption ="Ciao sono Manuel"
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--wCGgterD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" 
      />
    </div>  
  );
}

export default App;
