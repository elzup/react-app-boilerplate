// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Potato } from '../../types'
// import * as selectors from './selectors'

type OProps = { match: { params: { id: string } } }
type Props = { potato: Potato, id: string }

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		if (!props.potato) {
			return <div>Not found</div>
		}
		return (
			<div>
				<p>{props.potato.text}</p>
				<p>{props.id}</p>
			</div>
		)
	}
}

const ms = (state: State, oProps: OProps) => ({
	potato: state.PotatoById[oProps.match.params.id],
	id: oProps.match.params.id,
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
