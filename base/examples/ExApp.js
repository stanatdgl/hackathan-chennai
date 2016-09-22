import React from 'react';

export default class App extends React.Component {

	constructor(){
		super();
		this.state = {txt : 'this is the state default txt'}
	}  	

	updateText(e) {

		this.setState({txt : e.target.value});
	}

	render() {
		return (<div>
					<div > {this.state.txt}</div>
					<input name='txt' value='' onChange={this.updateText.bind(this)}/>
			</div>)

	}	
}
