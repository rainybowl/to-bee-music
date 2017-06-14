import Immutable from 'immutable'

export default (settings = {user: 'Divine_Trick'}, action) => {

  switch(action.type) {
    case 'SET_USER':
    	console.log(settings)
      return {
      	user: action.payload
      }
    default:
      return settings

  }
}