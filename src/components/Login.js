import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const style = {
  width: '20%'
}

const Login = withRouter(({history}) => (
  <div style={style}>
    <LoginForm onSubmitSuccess={() => { history.push('/app') }}/>
  </div>
))

export default Login