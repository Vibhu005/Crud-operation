import React from "react";

class ClassCompo extends React.Component{
	constructor(){
		super();
		this.state={
			count :0
		};
		this.increase=this.increase.bind(this);
		this.dicrease=this.dicrease.bind(this); 
	}
	
increase(){
	this.setState({count : this.state.count +1});
}
dicrease(){
	this.setState({count : this.state.count -1});
}

	render(){
		return (
			<div style={{margin:'50px'}}>
			<h1>Welcome to Geeks for Geeks </h1>
			<h3>Counter App using Class Component : </h3>
			<h2> {this.state.count}</h2>
			<button onClick={this.increase}> +</button>
			<button onClick={this.dicrease}> -</button>

			</div>
		)
	}
}

export default ClassCompo;
