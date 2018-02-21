// @flow
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from '../../containers/Home'
import StyledLink from '../../components/StyledLink'
import GoogleAuthContainer from '../GoogleAuthContainer'
import TwitterAuthConainer from '../TwitterAuthContainer'
import PotatoContainer from '../../containers/PotatoById'

import '../../firebase'

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<StyledLink to="/" label="Home" />
				</li>
				<li>
					<StyledLink to="/login" label="Google Auth" />
				</li>
				<li>
					<StyledLink to="/tlogin" label="Twitter Auth" />
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
