const flightFilter = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_FLIGHTS':
      return action.filter
    default:
      return state
  }
}

export default flightFilter