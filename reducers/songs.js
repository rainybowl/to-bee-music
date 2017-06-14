import Immutable from 'immutable'

export default (state = Immutable.List([]), action) => {
  switch(action.type) {
    case 'getSongs':
      return []
    default:
      return state
  }
}