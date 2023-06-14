import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ClassCompo from './Operation/ClassCompo';
import Create from './Operation/Create';
import Edit from './Operation/Edit';
import Example from './Operation/Example';
import FunctionCompo from './Operation/FunctionCompo';
import Home from './Operation/Home';
import ScrollTab from './Operation/ScrollTab';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/create' element={<Create />} />
				<Route path='/scrolltab' element={<ScrollTab />} />
				<Route path='/' element={<Home />} />
				<Route path='/edit' element={<Edit />} />
				<Route path='/example' element={<Example />} />
				<Route path='/function' element={<FunctionCompo />} />
				<Route path='/class' element={<ClassCompo />} />
			</Routes>
		</div>
	);

}

export default App;
