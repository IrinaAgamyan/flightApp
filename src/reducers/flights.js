const flights = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FLIGHT':
      return [
        ...state,
        {
          id: action.id,
          from: action.from,
          to: action.to,
          departureTime: action.departureTime,
          landingTime: action.landingTime,
          price: action.price
        }
      ]
    default:
      return state
  }
}

export default flights