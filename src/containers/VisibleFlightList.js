import { connect } from 'react-redux'
import FlightList from '../components/FlightList'

const getVisibleFlights = (flights, flightFilter) => {
  if (flightFilter) {
    return flights.filter(f => new RegExp(flightFilter, 'i').test(f.to))
  }
  return flights
}

const mapStateToProps = (state) => ({
  flights: getVisibleFlights(state.flights, state.flightFilter)
})

const VisibleFlightList = connect(
  mapStateToProps
)(FlightList)

export default VisibleFlightList