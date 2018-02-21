// @flow
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from '../../containers/Home'
import GoogleAuthContainer from '../GoogleAuthContainer'
import TwitterAuthConainer from '../TwitterAuthContainer'
import PotatoContainer from '../../containers/PotatoById'

import '../../services/firebase'

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Google Auth</Link>
				</li>
				<li>
					<Link to="/tlogin">Twitter Auth</Link>
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/login" component={GoogleAuthContainer} />
			<Route path="/potato/:id" component={PotatoContainer} />
			<Route path="/tlogin" component={TwitterAuthConainer} />
		</div>
	</Router>
)
export default App
