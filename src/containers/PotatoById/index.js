// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Potato } from '../../types'
// import * as selectors from './selectors'

type OProps = { id: string }
type Props = { potato: Potato }

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		if (!props.potato) {
			return <div>Not found</div>
		}
		return <div>{props.potato.text}</div>
	}
}

const ms = (state: State, oProps: OProps) => ({
	potato: state.PotatoById[oProps.id],
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
