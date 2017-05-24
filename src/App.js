import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route } from 'react-router-dom'

import {
	MuiThemeProvider,
	RaisedButton,
	AppBar,
	Drawer,
	MenuItem,
} from './MaterialUI';

import { PasswordHome, PasswordForm } from './components/Password'

injectTapEventPlugin();

class App extends Component {

  render() {
    return (
			<MuiThemeProvider>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={PasswordHome} />
						<Route exact path="/new" component={PasswordForm} />
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
    );
  }
}

export default App
