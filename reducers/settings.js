import Immutable from 'immutable';

let initialSettings = {
	user: 'Divine_Trick'
};

export default (settings = initialSettings, action) => {

  switch(action.type) {
    case 'SET_USER':
    console.log('setting user')
      return {
    //  	...settings,
      	user: action.payload
      }
    default:
      return settings

  }
}