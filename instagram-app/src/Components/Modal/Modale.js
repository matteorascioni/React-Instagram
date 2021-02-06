import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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

    return (
        <div className="modal"> 
          <Modal
              open={ open } 
              onClose={ () => setOpen(false) }
          >
              <div style={ modalStyle } className={ classes.paper }>
                  <h2>I am a Modal</h2>
              </div>
          </Modal>

          <Button onClick={ () => setOpen(true) }>  
            Open Modal
          </Button>

        </div>  
    )
}

export default Modale;
