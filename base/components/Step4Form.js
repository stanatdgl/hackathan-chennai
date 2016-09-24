import React from 'react'
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

    const { handleSubmit, nextStep, customerData, moveNextStep } = this.props

    return (
     <form onSubmit={handleSubmit}>
        <div style={ { paddingBottom:'16px'}}>
          <label>Your Address here</label>
        </div>

        <div style={ {paddingBottom:'14px'}}>
          <label>Address1</label>
          <div>
            <input name="address1" disabled value={customerData.address1} type="text" placeholder="address1"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Address2</label>
          <div>
            <input name="address2" disabled value={customerData.address2} type="text" placeholder="address2"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Address3</label>
          <div>
            <input name="address3" disabled value={customerData.address3} type="text" placeholder="address3"/>
          </div>
        </div>

        <div style={ {paddingBottom:'14px'}}>
          <label>Postal Code </label>
          <div>
            <input name="postcode" disabled value={customerData.postcode} type="postcode" placeholder="postcode"/>
          </div>
        </div>
        
        <div>
          <button type="button" onClick={this.moveNext} >Next</button>
        </div>
      </form>
    )
  }   
}
