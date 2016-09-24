import React from 'react'
import Webcam from "react-user-media";
import ReactCrop from 'react-image-crop';



export default class Step3Form extends React.Component {

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

    const { handleSubmit, nextStep, moveNextStep } = this.props

    return (
        <form onSubmit={handleSubmit}>
          <div style={ { paddingBottom:'16px'}}>
            <label>Let's take a selfie</label>        
          </div>
          { 
            this.state.capturedImage ?
            <div style={ { paddingBottom:'14px'}}>
              <ReactCrop ref='reactCropImg' width='475' height='300' src={this.state.capturedImage} /> 
            </div> 
            :
            <div>
                <Webcam ref="webcam" width='475' height='300' />
                <button type="button" onClick={this.capture} >Capture</button>
            </div>            
          }
            
          <div>
            <button type="button" onClick={this.moveNext} >Next</button>
          </div>
        </form>
    )
  }   
}
