// @flow
import * as React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

type Props = {
	onSubmit: Function,
}

class Cart extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<div>
				<TextField hintText="ポテト名" ref="textInput" />
				<FlatButton
					label="投稿"
					primary={true}
					onClick={() => {
						const text = this.refs.textInput.input.value
						props.onSubmit(text)
					}}
				/>
			</div>
		)
	}
}

export default Cart
