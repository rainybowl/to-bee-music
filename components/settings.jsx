import React,  { Component }  from 'react'
import { connect } from 'react-redux'

import store from '../store'
import { getSongs, setUser } from '../actions'



class Settings extends Component {

    render () {

      return(<div>
      <form className="bee-panel">
        <label for="user">User name!!: </label>
        <input type="text" name="user" id="userInput" />
        <input type="submit" value="Change" onClick={function(e){

        		e.preventDefault();

        		console.log('state ', state)
        		
        		var userName = document.getElementById('userInput').value;

     //    		store.dispatch({
  			//   type: 'SET_USER',
  			//   payload: userName
  			// })

  			store.dispatch(setUser(userName))
        }} />
      </form>

   
    </div>
)}

}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(Settings)


/*

   {state.settings.user !='' &&
        <span>Now using: {state.settings.user}_s Musiksammlung!</span>
      }

      */
