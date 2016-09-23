import React from 'react'
import { Field, reduxForm } from 'redux-form';

const StepConfForm = (props) => {
  const { handleSubmit, pristine, nextStep,previousStep, moveNextStep,  reset, submitting } = props

  const moveNext = () =>{
    moveNextStep(nextStep);
  }

   return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Do you want to share your Facebook details to RBS?</label>
        <div>
          <label><Field name="option" component="input" type="radio" value="yes"/> Yes</label>
          <label><Field name="option" component="input" type="radio" value="no"/> No</label>
        </div>
      </div>
      <div>
        <button type="button" onClick={moveNext} >Next</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'StepConf'  
})(StepConfForm)
