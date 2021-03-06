// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import type { State, Auth, Potato } from '../../types'
import { doLogin, refLogin, addPotato, watchPotatoes, doLogout } from './logic'
import TextForm from '../../components/TextForm'
// import * as selectors from './selectors'

type OProps = {}
type Props = {
	auth: Auth,
	refLogin: Function,
	potatoes: Potato[],
	doLogin: Function,
	doLogout: Function,
	addPotato: Function,
	watchPotatoes: Function,
}

const LoginedContainer = (props: Props) => (
	<div>
		<p>Logined</p>
		<a onClick={props.doLogout}>ログアウト</a>
		<p>name: {props.auth.displayName}</p>
		<p>mail: {props.auth.email}</p>
		<div>
			<TextForm onSubmit={props.addPotato} />
		</div>
		<ul>
			{props.potatoes.map((potato, k) => (
				<li key={k}>
					<h3>ポテト{k}</h3>
					<p>{potato.text}</p>
					<Link to={`potato/${potato.id || ''}`}>Show</Link>
				</li>
			))}
		</ul>
	</div>
)

const AuthContainer = (props: Props) => (
	<div>
		<p>Not logined</p>
		<p onClick={props.doLogin}>Login</p>
	</div>
)

class Container extends React.Component<Props> {
	componentDidMount() {
		this.props.refLogin()
		// this.props.watchPotatoes()
	}

	render() {
		const { props } = this
		if (!props.auth.authorized) {
			return <AuthContainer {...props} />
		}
		return <LoginedContainer {...props} />
	}
}

const ms = (state: State) => ({
	auth: state.TwitterAuthContainer,
	potatoes: _.map(state.PotatoById, (v, k) => ({ ...v, id: k })),
})

const conn: Connector<OProps, Props> = connect(ms, {
	doLogin,
	doLogout,
	refLogin,
	addPotato,
	watchPotatoes,
})

export default conn(Container)
