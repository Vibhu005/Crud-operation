import React, { useState } from "react";

const FunctionCompo=()=>{
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count+1);
	}
	const dicrease = () => {
		setCount(count-1);
	}

	return (
		<div style={{margin:'50px'}}>
			<h1>Welcome to Geeks for Geeks </h1>
			<h3>Counter App using Functional Component : </h3>
		<h2>{count}</h2>
            <button style={{backgroundColor:'pink', padding: '5px', fontSize: '40px', margin: '10px', cursor: 'pointer'}} onClick={increase}>+</button>
			<button style={{ backgroundColor: 'pink', padding: '5px', fontSize: '40px', margin: '10px', cursor: 'pointer' }} onClick={dicrease}>-</button>
		</div>
	)
}


export default FunctionCompo;
