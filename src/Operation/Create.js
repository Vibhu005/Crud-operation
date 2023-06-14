import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Form } from 'react-bootstrap';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Button } from '@material-ui/core';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Create({open, setOpen}) {
  const classes = useStyles();
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

	// let history = useNavigate();

  const handelSubmit = (e) => {
    setIsLoading(true);
		e.preventDefault();

		const ids = uuid()
		let uni = ids.slice(0,8)

		let a = name, b=age, c=phone
    array.push({ id: uni, Name: a, Age: b, Phone: c })
    
    setOpen(false);
    setIsLoading(false);


	// history('/')
		
  }
  
  const [number, setNumber] = useState()

  const checkInput = (e) => {
   setPhone(e.target.value)
    setNumber();
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Form className='edit-form'>
            <CancelOutlinedIcon className='closebtn' onClick={handleClose} />
            {/* <Button className='closebtn' onClick={handleClose}>X</Button> */}
            <h2>Create</h2>
    <Form.Group controlId="formBasicName">
	<Form.Control className='edit-input' onChange={e => setname(e.target.value)}
				type="text"
				placeholder="Enter Name" required/>
    </Form.Group>


	
    <Form.Group controlId="formBasicAge">
	<Form.Control className='edit-input' onChange={e => setage(e.target.value)}
				type="text"
				placeholder="Age" required/>
</Form.Group>
    <Form.Group controlId="formBasicAge">
              <Form.Control className='edit-input'
                // onChange={e => setPhone(e.target.value)}
                type="tel"
                maxLength="10"
                onChange={(e)=> checkInput(e)}
				placeholder="Phone" required/>
</Form.Group>
            <Button
              disabled={ !name || !age || !phone }
						  className='edit-btn'
              onClick={e => handelSubmit(e)}
	            variant="primary" type="submit">
	          Submit
            </Button>
             {/* {isLoading === true ? (
                            <Button
                              className='edit-btn'
                              type="button"
                            >
                              Loding...
                            </Button>
                          ) : (
                            <Button
                              className='edit-btn'
                              onClick={e => handelSubmit(e)}
                              type="submit"
                            >
                              {name || age || phone ? 'Submit' : 'Create'}
                            </Button>
                          )} */}
{/* <Link to='/'>
	<Button className='edit-btn' variant="info" size="lg">
	Home
	</Button>
</Link> */}

</Form>
        </Fade>
      </Modal>
    </div>
  );
}