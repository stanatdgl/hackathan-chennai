import React from 'react'
import Webcam from "react-user-media";
import ReactCrop from 'react-image-crop';

export default class Step2Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {capturedImage: null}
    this.capture = this.capture.bind(this);
    this.moveNext = this.moveNext.bind(this);
  }

  moveNext (){
    this.props.moveNextStep(this.props.nextStep);
  }

  capture(){
    let screenShot = this.refs.webcam.captureScreenshot();
    this.setState({capturedImage: screenShot });
  }

  render(){

    const { handleSubmit, nextStep, previousStep, moveNextStep } = this.props

    return (
        <form onSubmit={handleSubmit}>
          <div style={ { paddingBottom:'16px'}}>
            <h1>Let's capture your ID</h1>        
          </div>
          { 
            this.state.capturedImage ?
            <div id="croppingArea" style={ { paddingBottom:'14px'}}>
              <ReactCrop ref='reactCropImg' disabled width='475' height='300' src={this.state.capturedImage} /> 
            </div> 
            :
            <div id="webcamArea">
              <div id="webcam">
                <Webcam ref="webcam" width='475' height='300' />
              </div>

              <button align="right" type="button" onClick={this.capture} >Capture</button>
            </div>            
          }          
            
          <div>
            <button type="button" onClick={this.moveNext} >Next</button>            
          </div>
        </form>
    )
  }   
}
