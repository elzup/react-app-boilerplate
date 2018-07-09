// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State as RootState } from '../../types'

type Props = {}

class Home extends React.Component<Props> {
	render() {
		const {} = this.props
		return <div>Hello</div>
	}
}

const ms = (state: RootState) => ({})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Home)
