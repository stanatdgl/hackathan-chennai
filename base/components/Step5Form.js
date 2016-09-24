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
      <h5> <i> Hi Karthick, Welcome to RBS </i>  </h5>
      </div>

      <div style={ { paddingBottom:'16px'}}>
        <label>Your details are below</label>
        <div style={ {paddingBottom:'14px'}}>
          <label>Your Account number</label>
          <div>
            <b>
              {customerData.accounNo}
              </b>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Customer ID number</label>
          <div>
          <b>
            {customerData.customerId}
            </b>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Sort Code</label>
          <div>
            <b>
            {customerData.sortcode}
            </b>
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
