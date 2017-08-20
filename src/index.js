import React from 'react'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import Login from './components/Login'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/app" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)