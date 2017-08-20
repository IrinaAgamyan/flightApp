import React from 'react'
import AddFlight from '../containers/AddFlight'
import FilterFlights from '../containers/FilterFlights'
import VisibleFlightList from '../containers/VisibleFlightList'

const App = () => (
  <div>
    <AddFlight />
    <FilterFlights />
    <VisibleFlightList />
  </div>
)

export default App