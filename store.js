import { createStore, combineReducers } from 'redux';
import songs from './reducers/songs'
import settings from './reducers/settings'

export default createStore(
 	combineReducers({
 		songs: songs,
 		settings: settings
 	})

 )
