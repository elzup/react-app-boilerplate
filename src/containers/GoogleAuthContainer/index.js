// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Auth } from '../../types'
// import * as selectors from './selectors'

type OProps = {}
type Props = {
	auth: Auth,
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
	</div>
)

const Container = (props: Props) =>
	props.authorized ? (
		<LoginedContainer {...props} />
	) : (
		<AuthContainer {...props} />
	)

const ms = (state: State) => ({
	auth: state.GoogleAuthContainer,
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
