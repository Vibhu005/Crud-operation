import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import array from './array';
import { Link, useNavigate } from 'react-router-dom';
import './Operation.css';
import { AiTwotoneDelete } from "@react-icons/all-files/ai/AiTwotoneDelete";
import { FiEdit } from "@react-icons/all-files/fi/FiEdit";
import { Button } from '@material-ui/core';
import Create from './Create';
import Edit from './Edit';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

function Home() {
  const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = React.useState(false);

let history = useNavigate()

function setID(id,name,age,phone){
	localStorage.setItem('id', id);
	localStorage.setItem('Name', name);
	localStorage.setItem('Age', age);
	localStorage.setItem('Phone', phone);
}

function deleted(id){
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);
setOpenDelete(false)
	array.splice(index,1)
	history('/')
	}

	 const handleOpen = () => setOpenDelete(true);
  const handleClose = () => setOpenDelete(false);

return (
    <>
        <div className='main-container'>
            <h2 className='title'>CRUD Operation</h2>
<Table striped bordered hover className='table'>
<thead>
	<tr>
	<th className='heading'>Name</th>
	<th className='heading'>Age</th>
	<th className='heading'>Phone</th>
	<th className='heading'>Action</th>
	</tr>
</thead>
<tbody>

	
					{array.map((item) => {
						const editModalOpen = () => {
							setOpenEdit(true)
							setID(item.id, item.Name, item.Age, item.Phone)
							console.log(item, 'item--data----')
		}
						return (
	<>
<tr>
	<td  className='table-data'>{item.Name}</td>
	<td  className='table-data'>{item.Age}</td>
	<td  className='table-data'>{item.Phone}</td>
		
	
        <td className='table-data'>
            <Link to={`/edit`}>
               <FiEdit className='update-icon' onClick={editModalOpen} />
            </Link>   
            <AiTwotoneDelete className='update-icon yellow' onClick={handleOpen} />
            {/* <AiTwotoneDelete className='update-icon' onClick={(e) => deleted(item.id)} /> */}
        </td>
	</tr>
	<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDelete}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openDelete}>
          <Box sx={style} className="deleteModal">
			<h3>Are you Sure...?</h3>
			<p>Delete this item.</p>	
			<div>
				<AiTwotoneDelete className='update-icon red' onClick={(e) => deleted(item.id)} />
				<CancelOutlinedIcon className='closebtn' onClick={handleClose} />	
			</div>							
          </Box>
        </Fade>
      </Modal>
								</>

)})}
</tbody>
</Table>
{/* <Link className="d-grid gap-2" to='/create'> */}
<Button className='edit-btn' variant="warning" size="lg" onClick={() => setOpen(true)}>Create</Button>
{/* </Link> */}
		</div>
		{/* <Create showModal={showModal} setShowModal={setShowModal} /> */}
		<Create open={open} setOpen={setOpen} />
		{/* <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} /> */} 
    </>
)
}

export default Home
