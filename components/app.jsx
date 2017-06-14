import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import BeeApp from './bee'


var ToBeeMusicApp = document.getElementById('bee-app')
render(
  <Provider store={store}>
  	<BeeApp />
  </Provider>,
  ToBeeMusicApp
)
