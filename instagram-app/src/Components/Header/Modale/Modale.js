import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core/';

import './Modale.css'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Modale = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle); 
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="modal"> 
      <Modal
          open={ open } 
          onClose={ () => setOpen(false) }
      >
        <div style={ modalStyle } className={ classes.paper }>
          <center>
            <img 
              className="modale__image" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" 
              alt=""
            />
          </center>
          <form className="modale__form">
            <Input
              className="form__child"
              placeholder="username"
              type="text"
              value={ username }
              onChange={(e) => setUsername(e.target.value)}
            />   
            <Input
              className="form__child"
              placeholder="email"
              type="email"
              value={ email }
              onChange={(e) => setEmail(e.target.value)}
            />    
            <Input
              className="form__child"
              placeholder="password"
              type="password"
              value={ password }
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">  
              Sign Up
            </Button>
          </form> 
        </div>
      </Modal>
    
      <Button onClick={ () => setOpen(true) }>  
        Sign Up
      </Button>
    </div>  
  )
}

export default Modale;
