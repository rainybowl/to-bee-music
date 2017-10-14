import React, { Component }  from 'react';
import { connect } from 'react-redux';

import store from '../store';
import { 
  getSongs, 
  setUser 
} from '../actions';

import { logger } from '../utils';

function mapStateToProps(state) {
  return {
    state
  }
};

@connect(mapStateToProps)
class Settings extends Component {


    constructor(props) {
      super(props);

      this.state = {
        user: ''
      };

      this.handleUserNameInput = this.handleUserNameInput.bind(this);
      this.changeUser = this.changeUser.bind(this);
    };

    handleUserNameInput(e){
          console.log('handleUserNameInput ', e.target.value)

          this.setState({
            user: e.target.value
          });
    };

    changeUser() {
      let { user } = this.state;

        store.dispatch(
          setUser(user)
        );
    };

    render () {
      return(<form className="bee-panel">

          <label 
            for="user"
            >
            User name: 
            </label>

          <input 
            type="text" 
            name="user"
            value={this.state.user}
            onChange={this.handleUserNameInput} 
           />

          <input 
            type="button" 
            value="Change" 
            onClick={this.changeUser} 
            />

        </form>
    )};
};

export default Settings;
