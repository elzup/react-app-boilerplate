// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Product } from '../../types'
// import * as selectors from './selectors'

type OProps = {}
type Props = {}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return <div>{props}</div>
	}
}

const ms = (state: State) => ({ })

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
