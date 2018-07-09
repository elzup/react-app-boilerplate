// @flow
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

type Props = {
	disabled: boolean,
	handleSubmit: Function,
}

class LoginForm extends React.Component<Props> {
	emailRef: ?HTMLInputElement
	passRef: ?HTMLInputElement

	onSubmit = () => {
		if (!this.emailRef || !this.passRef) {
			return
		}
		this.props.handleSubmit({
			email: this.emailRef.value,
			password: this.passRef.value,
		})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<TextField
						id="name"
						label="ユーザ名"
						disabled={this.props.disabled}
						margin="normal"
						inputRef={r => {
							this.emailRef = r
						}}
						inputProps={{ 'data-test': 'email' }}
					/>
					<TextField
						id="password-input"
						label="パスワード"
						disabled={this.props.disabled}
						inputRef={r => {
							this.passRef = r
						}}
						type="password"
						autoComplete="current-password"
						margin="normal"
						inputProps={{ 'data-test': 'password' }}
					/>
					<Button
						disabled={this.props.disabled}
						variant="raised"
						onClick={this.onSubmit}
						data-test="login-btn"
					>
						ログイン
					</Button>
				</form>
			</div>
		)
	}
}

export default LoginForm
