import React from 'react'

class DemoExample extends React.Component{
	state={
		s:this.props.price,
		c:this.props.name,
		t:this.props.age
	}
	render(){

		return(
			<div>
				
				<p>{this.state.s}</p>
				<h1>{this.state.c}</h1>
				<h2>{this.state.t}</h2>

			</div>
			)

	}
}
export default DemoExample