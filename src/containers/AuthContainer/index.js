// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import type { State } from '../../types'
import * as actions from './actions'
import { doLogin, doLogout } from './logic'
import * as selectors from './selectors'
import LoginForm from '../../components/LoginForm'

type OProps = {}
type Props = {
	isLogin: boolean,
	authLoading: boolean,
	doLogin: Function,
	doLogout: Function,
	authEnd: Function,
	history: any, // HACKME
}

class AuthContainer extends React.Component<Props> {
	componentDidMount() {
		this.props.authEnd()
	}
	render() {
		const { props } = this
		if (props.isLogin) {
			// @HACKME: wait redux-persist save...
			props.history.push({ pathname: '/', search: '' })
			return <span>...</span>
		}
		return (
			<LoginForm disabled={props.authLoading} handleSubmit={props.doLogin} />
		)
	}
}

const ms = (state: State, op: OProps) => {
	return {
		isLogin: selectors.isLogin(state),
		authLoading: selectors.getAuthLoading(state),
	}
}
const conn = connect(ms, {
	doLogin,
	doLogout,
	authEnd: actions.authEnd,
})

export default withRouter(conn(AuthContainer))
