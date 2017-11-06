// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Item } from '../../types'

type Props = {
	items: Item[],
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<div>
				{props.items.map(item => {
					return <div>{item.name} </div>
				})}
			</div>
		)
	}
}

const ms = (state: State) => ({})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
