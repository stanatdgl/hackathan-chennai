import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Webcam from "react-user-media";
import ReactCrop from 'react-image-crop';

export default class Step5Form extends React.Component {

  constructor(props){
    super(props);
  }

  moveNext (){
    
  }

  render(){

    const { handleSubmit, pristine, nextStep, customerData, moveNextStep } = this.props

    return (
      <form onSubmit={handleSubmit}>
      <div style={ { paddingBottom:'16px'}}>
        <label>Welcome to RBS</label>   
      </div>

      <div style={ { paddingBottom:'16px'}}>
        <label>Your details are below</label>
        <div style={ {paddingBottom:'14px'}}>
          <label>Your Account number</label>
          <div>
            {customerData.accounNo}
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Customer ID number</label>
          <div>
            {customerData.customerId}
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Sort Code</label>
          <div>
            {customerData.sortcode}
          </div>
        </div>        
      </div>
      
      <div style={ { paddingBottom:'14px'}}>
        <button type="button" onClick={this.moveNext} >Done</button>
      </div>
    </form>
    )
  }   
}
