import React from 'react'

export default class Step1Form extends React.Component {

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
            <label>Is this you?</label>
        </div>

        <div style={ {paddingBottom:'14px'}}>
          <label>First Name</label>
          <div>
            <input name="firstName" type="text" value={customerData.firstname} placeholder="First Name"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Middle Name</label>
          <div>
            <input name="middlename" type="text" value={customerData.middlename} placeholder="middlename"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Last Name</label>
          <div>
            <input name="lastName" type="text" value={customerData.lastname} placeholder="Last Name"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Date of Birth</label>
          <div>
            <input name="dob" type="dob" value={customerData.dob} placeholder="dob"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Email</label>
          <div>
            <input name="email" type="email" value={customerData.email} placeholder="Email"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Contact Number</label>
          <div>
            <input name="phone" type="phone" value={customerData.phone} placeholder="phone"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Sex</label>
          <div>
            <label><input name="sex" type="radio" value="male"/> Male</label>
            <label><input name="sex" type="radio" value="female"/> Female</label>
          </div>
        </div>                
        <div>
          <button type="button" onClick={this.moveNext} >Next</button>
        </div>
      </form>
    )
   }
}
