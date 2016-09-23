import React from 'react';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import Step4Form from './Step4Form';

export default class AppContainer  extends React.Component {
	
	constructor(props){		
		super(props);
  		this.state = { currentStep: '1' };
		this.moveNextStep = this.moveNextStep.bind(this);
	}

	moveNextStep(nextStep){
		this.setState({currentStep: nextStep});
	}

	getChildView(nextStep){
		
		console.log('nextStep ::' + nextStep)

		switch (nextStep) {	
			case '1': 
				return <Step1Form moveNextStep={this.moveNextStep} previousStep='1' nextStep='2'/>
			case '2':
				return <Step2Form moveNextStep={this.moveNextStep} previousStep='1' nextStep='3'/>
			case '3':
				return <Step3Form moveNextStep={this.moveNextStep} previousStep='1' nextStep='3'/>
			case '4':
				return <Step4Form moveNextStep={this.moveNextStep} previousStep='1' nextStep='3'/>		
		}
	}

	render(){

		let currentStep =this.state.currentStep;
		const child = this.getChildView(currentStep);	
		console.log(child)

		return (
				<div id='childElement'>
					{child}
				</div>
			);
	}
}

