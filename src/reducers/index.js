import { combineReducers } from 'redux'
import flights from './flights'
import flightFilter from './flightFilter'
import { reducer as formReducer } from 'redux-form'

const flightApp = combineReducers({
  flights,
  flightFilter,
  form: formReducer.plugin({
    addFlightForm: (state, action) => {
      switch (action.type) {
        case 'ADD_FLIGHT':
          return undefined
        default:
          return state
      }
    }
  })
})

export default flightApp