import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { SubmissionError } from 'redux-form'
import { Button, TextField } from 'material-ui'

const style = {
  width: '40%',
  margin: 'auto'
}

const buttonStyle = {
  marginTop: '20px',
  width: '100%'
}

const submit = values => {
  let fields = ['from', 'to', 'departureTime', 'landingTime', 'price']
  for (let field of fields) {
    if (!values[field]) {
      throw new SubmissionError({
        [field]: 'Required'
      })
    }
  }
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
  }) =>
  <TextField
    {...input}
    type={type}
    label={label}
    error={!!error}
    helperText={error}
    fullWidth
    margin="dense"
    InputLabelProps={{ shrink: true }}/>

const AddFlightForm = props => {
  const { handleSubmit } = props
  return (
    <div style={style}>
      <form onSubmit={handleSubmit(submit)}>
        <Field name="from" label="From" type="text" component={renderField} />
        <Field name="to" label="To" type="text" component={renderField} />
        <Field name="departureTime" label="Departure time" type="date" component={renderField} />
        <Field name="landingTime" label="Landing time" type="date" component={renderField} />
        <Field name="price" label="Price" type="number" component={renderField} />
        <Button style={buttonStyle} raised color="primary" type="submit">
          Add Flight
        </Button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'addFlightForm'
})(AddFlightForm)