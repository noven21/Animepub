import React from 'react';
import { Container } from '@material-ui/core';

import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
	return (
		<GoogleOAuthProvider clientId='776899512697-6v6domvfpnuem9fg67q4snclht1c2732.apps.googleusercontent.com'>
			<BrowserRouter>
				<Container maxwidth='lg'>
					<Navbar />
					<Switch>
						<Route
							path='/'
							exact
							component={Home}
						/>
						<Route
							path='/auth'
							exact
							component={Auth}
						/>
					</Switch>
				</Container>
			</BrowserRouter>
		</GoogleOAuthProvider>
	);
};

export default App;
