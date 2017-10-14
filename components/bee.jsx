import React from 'react';

const BeeApp = (props) => (
	<div>
		<div>some kind of navbar here </div>
		{props.children}
	</div>	
);

export default BeeApp;
