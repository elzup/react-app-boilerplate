// @flow
import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import queryString from 'query-string'

import Home from '../../components/Home'
import StyledLink from '../../components/StyledLink'
import GoogleAuthContainer from '../GoogleAuthContainer'
import PotatoContainer from '../../containers/PotatoById'

import '../../firebase'

const SafeHome = props => {
	const params = queryString.parse(props.location.search)
	if (params.p) {
		const page = params.p
		delete params.p
		const qs = queryString.stringify(params)
		const to = page + (qs ? '?' + qs : '')
		return <Redirect to={props.match.url + to} />
	}
	if (true) {
		return <Home />
	}
}

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
)

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>Components</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route
			exact
			path={match.url}
			render={() => <h3>Please select a topic.</h3>}
		/>
	</div>
)

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<StyledLink to="/" label="Home" />
				</li>
				<li>
					<StyledLink to="/about" label="About" />
				</li>
				<li>
					<StyledLink to="/topics" label="Topics" />
				</li>
				<li>
					<StyledLink to="/login" label="Login" />
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={SafeHome} />
			<Route path="/about" component={About} />
			<Route path="/topics" component={Topics} />
			<Route path="/login" component={GoogleAuthContainer} />
			<Route path="/potato/:id" component={PotatoContainer} />
		</div>
	</Router>
)
export default App
