import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Webcam from "react-user-media";
import ReactCrop from 'react-image-crop';



export default class Step3Form extends React.Component {

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

    const { handleSubmit, nextStep,previousStep, moveNextStep } = this.props

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>IDCapure Page</label>        
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
          </div>
        </form>
    )
  }   
}
