import React from 'react'

export default class Step1Form extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        firstname : this.props.customerData.firstname,
        middlename : this.props.customerData.middlename,
        lastname : this.props.customerData.lastname
      }
    this.moveNext = this.moveNext.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  moveNext (){
    this.props.moveNextStep(this.props.nextStep);
  }

  onChange(event){
    let sourceName =  event.source.name;
    console.log('sourceName ::' + event.source.value);
    this.setState({ sourceName : event.source.value})
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
            <input name="firstname" type="text" onChange={this.onChange} value={this.state.firstname} placeholder="First Name"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Middle Name</label>
          <div>
            <input name="middlename" type="text" onChange={this.onChange} value={this.state.middlename} placeholder="Middle Name"/>
          </div>
        </div>
        <div style={ {paddingBottom:'14px'}}>
          <label>Last Name</label>
          <div>
            <input name="lastname" type="text" onChange={this.onChange} value={this.state.lastname} placeholder="Last Name"/>
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
            <label><input name="sex" checked type="radio" value="male"/> Male</label>
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
