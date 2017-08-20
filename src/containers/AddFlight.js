import React from 'react'
import { connect } from 'react-redux'
import { addFlight } from '../actions'
import AddFlightForm from '../components/AddFlightForm'
import { getFormValues } from 'redux-form'

let AddFlight = ({ dispatch, formValues }) => {
  return (
    <AddFlightForm onSubmitSuccess={() => {
      dispatch(addFlight(formValues.from, formValues.to, formValues.departureTime, formValues.landingTime, formValues.price))
    }}/>
  )
}

const mapStateToProps = function(state){
  return {
    formValues: state.form.addFlightForm ? state.form.addFlightForm.values : null
  }
}

AddFlight = connect(mapStateToProps)(AddFlight)

export default AddFlight