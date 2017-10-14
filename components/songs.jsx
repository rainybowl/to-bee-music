import React from 'react';
import { connect } from 'react-redux';

import { getSongs } from '../actions';
import store from '../store';

/*
const mapStateToProps = songs => ({
    songs
 });

@connect(mapStateToProps)
*/
const Songs = ({songs, dispatch}) => (
  <div>
    songs
  </div>
);


/*

   {state.settings.user !='' &&
        <span>Now using: {state.settings.user}_s Musiksammlung!</span>
      }

      */
