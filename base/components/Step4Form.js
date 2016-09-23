import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Webcam from "react-user-media";
import ReactCrop from 'react-image-crop';

export default class Step4Form extends React.Component {

  constructor(props){
    super(props);
    this.moveNext = this.moveNext.bind(this);
  }

  moveNext (){
    this.props.moveNextStep(this.props.nextStep);
  }

  render(){

    const { handleSubmit, nextStep,moveNextStep } = this.props

    return (
     <form onSubmit={handleSubmit}>
        <div>
          <label>Your Address here</label>
        </div>

        <div>
          <label>First Name</label>
          <div>
            <input name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input name="email" component="input" type="email" placeholder="Email"/>
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label><input name="sex" component="input" type="radio" value="male"/> Male</label>
            <label><input name="sex" component="input" type="radio" value="female"/> Female</label>
          </div>
        </div>                
        <div>
          <button type="button" onClick={this.moveNext} >Next</button>
        </div>
      </form>
    )
  }   
}
