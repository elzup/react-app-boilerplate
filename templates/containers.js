// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State } from '../../types'
// import * as selectors from './selectors'

type OProps = {}
type Props = {}

const C = (props: Props) => (
	<div>{JSON.stringify(props)}</div>
)

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return C(props)
	}
}

const ms = (state: State, op: OProps) => ({ })

const conn = connect(ms, {})

export default conn(Container)
