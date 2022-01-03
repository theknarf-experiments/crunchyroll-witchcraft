import type { Component } from 'solid-js';

const App: Component = () => {
	const queue = document.querySelectorAll(".queue-item-wrapper");

  return <div style={{
		padding: '20px',
		background: 'black',
		color: 'white',
		'font-size': '22px',
		'font-family': 'sans-serif',
		'margin': '20px 0',
	}}>
		<span>Queue: {queue.length}</span>
	</div>;
};

export default App;
