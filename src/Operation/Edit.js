import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import array from './array';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Operation.css';
import { Button } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';


function Edit() {


	const [name, setname] = useState('');
	const [age, setage] = useState('');
	const [phone, setPhone] = useState('');
	const[id,setid] = useState('');

	
	let history = useNavigate()
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	
	const handelSubmit = (e) =>{
		e.preventDefault();
		
		let a = array[index]

	
		a.Name = name
		a.Age = age
		a.Phone = phone

		history('/')
	}


	useEffect(() => {
		setname(localStorage.getItem('Name'))
		setage(localStorage.getItem('Age'))
		setPhone(localStorage.getItem('Phone'))
		setid(localStorage.getItem('id'))
	}, [])

	const [number, setNumber] = useState()

  const checkInput = (e) => {
   setPhone(e.target.value)
    setNumber();
  };
	
return (
	<div className='edit-main'>
		<Form className='edit-form'>

			<Form.Group controlId="formBasicEmail">
				<Form.Control className='edit-input' value={name}
							onChange={e => setname(e.target.value)}
							type="text" placeholder="Enter Name" />
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Control className='edit-input' value={age}
							onChange={e => setage(e.target.value)}
							type="text" placeholder="Age" />
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Control className='edit-input' value={phone}
							// onChange={e => setPhone(e.target.value)}
					 onChange={(e)=> checkInput(e)}
							type="tel"
					maxLength="10"
					placeholder="Phone" />
			</Form.Group>

            <Button
                className='edit-btn'
			onClick={e => handelSubmit(e)}
			variant="primary" type="submit" size="lg">
				Update
			</Button>

			<Link className="d-grid gap-2" to='/'>
			<HomeIcon className='update-icon home' />
			</Link>
		</Form>
	</div>
)
}

export default Edit

// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import { Fade, Form } from 'react-bootstrap';
// import array from './array';
// import { Button } from '@material-ui/core';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function Edit({openEdit, setOpenEdit}) {
//   const classes = useStyles();
//  	const [name, setname] = useState('');
// 	const [age, setage] = useState('');
// 	const [phone, setPhone] = useState('');
// 	const[id,setid] = useState('');

	
	
// 	const index = array.map(function(e) { return e.id; }).indexOf(id);

	
// 	const handelSubmit = (e) =>{
// 		e.preventDefault();
		
// 		let a = array[index]

	
// 		a.Name = name
// 		a.Age = age
// 		a.Phone = phone

// 		setOpenEdit(false);
// 	}


// 	useEffect(() => {
// 		setname(localStorage.getItem('Name'))
// 		setage(localStorage.getItem('Age'))
// 		setPhone(localStorage.getItem('Phone'))
// 		setid(localStorage.getItem('id'))
// 	}, [])

// 	const handleClose = () => {
// 		setOpenEdit(false);
// 	}

//   return (
//     <div>
      
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={openEdit}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={openEdit}>
//           <Form className='edit-form'>
// 					  <CancelOutlinedIcon className='closebtn' onClick={handleClose} />
// 					  <h2>Edit</h2>
//  			<Form.Group controlId="formBasicEmail">
// 					<Form.Control
// 						className='edit-input' value={name}
// 						onChange={e => setname(e.target.value)}
// 						type="text" placeholder="Enter Name" />
// 					</Form.Group>

// 			<Form.Group controlId="formBasicPassword">
// 					<Form.Control
// 						className='edit-input' value={age}
// 						onChange={e => setage(e.target.value)}
// 						type="text" placeholder="Age" />
// 					  </Form.Group>
// 					  <Form.Group controlId="formBasicPassword">
// 				<Form.Control className='edit-input' value={phone}
// 							onChange={e => setPhone(e.target.value)}
// 							type="number" placeholder="Phone" />
// 			</Form.Group>

//             <Button
//                 className='edit-btn'
// 				onClick={e => handelSubmit(e)}
// 				variant="primary" type="submit" size="lg">
// 				Update
// 			</Button>
// 		</Form>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }
