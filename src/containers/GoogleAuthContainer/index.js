// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'

import type { State, Auth } from '../../types'
import { doLogin, refLogin, addPotato, watchPotatoes } from './logic'
import TextForm from '../../components/TextForm'
// import * as selectors from './selectors'

type OProps = {}
type Props = {
	auth: Auth,
	refLogin: Function,
	doLogin: Function,
	addPotato: Function,
	watchPotatoes: Function,
}

const LoginedContainer = (props: Props) => (
	<div>
		<p>Logined</p>
		<p>name: {props.auth.displayName}</p>
		<p>mail: {props.auth.email}</p>
		<div>
			<TextForm onSubmit={props.addPotato} />
		</div>
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
	auth: state.GoogleAuthContainer,
})

const conn: Connector<OProps, Props> = connect(ms, {
	doLogin,
	refLogin,
	addPotato,
	watchPotatoes,
})

export default conn(Container)
