let nextFlightId = 0
export const addFlight = (from, to, departureTime, landingTime, price) => ({
  type: 'ADD_FLIGHT',
  id: nextFlightId++,
  from,
  to,
  departureTime,
  landingTime,
  price
})

export const filterFlights = (filter) => ({
  type: 'FILTER_FLIGHTS',
  filter
})
