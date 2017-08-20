import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { SubmissionError } from 'redux-form'
import { Button, TextField } from 'material-ui'

const buttonStyle = {
  marginTop: '20px',
  width: '100%'
}

const submit = values => {
  if (!values.username) {
    throw new SubmissionError({
      username: 'Required'
    })
  }
  if (!values.password) {
    throw new SubmissionError({
      password: 'Required'
    })
  }
  if (values.username !== 'user') {
    throw new SubmissionError({
      username: 'Couldn\'t find your account'
    })
  }
  if (values.password !== 'password') {
    throw new SubmissionError({
      password: 'Wrong password'
    })
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
    margin="normal"/>

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="username" type="text" component={renderField} label="Username" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <Button style={buttonStyle} raised color="primary" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)