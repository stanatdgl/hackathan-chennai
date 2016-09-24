import React from 'react';
import Step0Form from './Step0Form';
import StepConfForm from './StepConfForm';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import Step4Form from './Step4Form';
import Step5Form from './Step5Form';

export default class AppContainer  extends React.Component {
	
	constructor(props){		
		super(props);
  		this.state = { currentStep: '0', customerData: null  };  		
		this.moveNextStep = this.moveNextStep.bind(this);
	}

	moveNextStep(nextStep, jsonData){
		if(jsonData){
			console.log("jsonData :: " +  jsonData.data);
			this.setState({currentStep: nextStep, customerData: jsonData.data});
		}else{
			this.setState({currentStep: nextStep});	
		}			
			
	}

	getChildView(nextStep){
	
		switch (nextStep) {	
			case '0': 
				return <Step0Form moveNextStep={this.moveNextStep} nextStep='C'/>	
			case 'C': 
				return <StepConfForm moveNextStep={this.moveNextStep} nextStep='2'/>	
			case '1': 
				return <Step1Form moveNextStep={this.moveNextStep} customerData={this.state.customerData} nextStep='2'/>
			case '2':
				return <Step2Form moveNextStep={this.moveNextStep} nextStep='3'/>
			case '3':
				return <Step3Form moveNextStep={this.moveNextStep} customerData={this.state.customerData} nextStep='4'/>
			case '4':
				return <Step4Form moveNextStep={this.moveNextStep} nextStep='5'/>		
			case '5':
				return <Step5Form moveNextStep={this.moveNextStep} nextStep='6'/>		
		}
	}

	render(){

		let currentStep =this.state.currentStep;
		const child = this.getChildView(currentStep);	
		console.log(child)

		return (

				<div id='childElement' style={ {width: "470px", padding:'14px', 'marginTop':'-38px', 'marginLeft':'258px', 'position':'relative', border: "2px solid"} }>				
					{child}
				</div>
			);
	}
}

