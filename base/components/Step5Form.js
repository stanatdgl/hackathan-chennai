import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Webcam from "react-user-media";
import ReactCrop from 'react-image-crop';

export default class Step5Form extends React.Component {

  constructor(props){
    super(props);
  }

  moveNext (){
    moveNextStep(nextStep);
  }

  render(){

    const { handleSubmit, pristine, nextStep,moveNextStep } = this.props

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <label>Welcome to RBS</label>   
      </div>

      <div>
        <label>Your details are below</label>
        <div>
          <label>Your Account number</label>
          <div>
            23424323
          </div>
        </div>
        <div>
          <label>Customer ID number</label>
          <div>
            43535345
          </div>
        </div>
        <div>
          <label>Sort Code</label>
          <div>
            23-22-22
          </div>
        </div>        
      </div>
      
      <div>
        <button type="button" onClick={this.moveNext} >Next</button>
      </div>
    </form>
    )
  }   
}
