import { connect } from 'react-redux'
import { filterFlights } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: e => {
    dispatch(filterFlights(e.target.value))
  }
})

const FilterFlights = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterFlights