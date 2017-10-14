import React from 'react';
import { connect } from 'react-redux';

//import Settings from './settings';
//import Songs from './songs';

import store from '../store';


const BeeApp = (props) => (
	<div>

		<div>some kind of navbar here </div>
		{props.children}

	</div>	
)



// function mapStateToProps(store) {
//   return {
//     store
//   }
// }

// connect(mapStateToProps)(Songs)
// connect(mapStateToProps)(Settings)

export default BeeApp;

//export default BeeApp; //connect(mapStateToProps)(Songs)


/*


<div>
  	<Settings  />
  	<Songs />
  	</div>


  	*/
