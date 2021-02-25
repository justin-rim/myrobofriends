import React from 'react';

const Scroll = (prop) => {
	return (
		<div style= {{overflowY: 'scroll', border: '4px solid black', height: '900px'}}>
			{prop.children}
		</div>
	);
};

export default Scroll;