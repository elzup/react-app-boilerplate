// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'

import type { State, Auth } from '../../types'
import { doLogin, refLogin } from './logic'
// import * as selectors from './selectors'

type OProps = {}
type Props = {
	auth: Auth,
	refLogin: Function,
	doLogin: Function,
}

const LoginedContainer = (props: Props) => (
	<div>
		<p>Logined</p>
		<p>name: {props.auth.displayName}</p>
		<p>mail: {props.auth.email}</p>
	</div>
)

const AuthContainer = (props: Props) => (
	<div>
		<p>Not logined</p>
		<button onClick={props.doLogin}>Login</button>
	</div>
)

class Container extends React.Component<Props> {
	componentDidMount() {
		this.props.refLogin()
	}

	render() {
		const { props } = this
		if (!props.authorized) {
			return <LoginedContainer {...props} />
		}
		return <AuthContainer {...props} />
	}
}

const ms = (state: State) => ({
	auth: state.GoogleAuthContainer,
})

const conn: Connector<OProps, Props> = connect(ms, { doLogin, refLogin })

export default conn(Container)
