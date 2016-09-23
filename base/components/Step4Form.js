import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Webcam from "react-user-media";
import ReactCrop from 'react-image-crop';



export default class Step4Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {capturedImage: null}
    this.capture = this.capture.bind(this);
  }

  moveNext (){
    moveNextStep(nextStep);
  }

  capture(){
    let screenShot = this.refs.webcam.captureScreenshot();
    this.setState({capturedImage: screenShot });
  }

  render(){

    const { handleSubmit, pristine, nextStep,previousStep, moveNextStep,  reset, submitting } = this.props

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Let's take a selfie</label>        
          </div>
          <div>
              <Webcam ref="webcam" />
          </div>
          <div>
              <button type="button" onClick={this.capture} >Capture</button>
          </div>

          <div>
          { 
            this.state.capturedImage?
              <ReactCrop ref='reactCropImg' src={this.state.capturedImage} /> : null        
          }          
          </div>
            
          <div>
            <button type="button" onClick={this.moveNext} >Next</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>
    )
  }   
}
