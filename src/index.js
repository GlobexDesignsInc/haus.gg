// @flow

import app from './server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000);

// flow-disable-next-line
if (module.hot) {
	// eslint-disable-next-line no-console
	console.log('✅  Server-side HMR Enabled!');

	// flow-disable-next-line
	module.hot.accept('./server', () => {
		// eslint-disable-next-line no-console
		console.log('🔁  HMR Reloading `./server`...');
		server.removeListener('request', currentApp);
		const newApp = require('./server').default;
		server.on('request', newApp);
		currentApp = newApp;
	});
}
