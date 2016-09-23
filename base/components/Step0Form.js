import React from 'react'
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';

const Step0Form = (props) => {

  const { handleSubmit, pristine, nextStep,previousStep, moveNextStep,  reset, submitting } = props
  // let url = "/sample.json";
  let url = "/sample.json";
  const moveNext = () =>{
    console.log("inside check");
    axios.get(url).then(function(response){
    		console.log(response);
        moveNextStep(nextStep);
    });    
  }

   return (
    <form>
      <div>
		<img src={'http://localhost:8080/Foundation.png'} alt="boohoo" onClick={moveNext} style={ {width: "470px", padding:'14px', 'position':'relative', border: "0px solid"} }/>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'step0'  
})(Step0Form)