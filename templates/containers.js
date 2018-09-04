// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State as RootState } from '../../types'
// import * as selectors from './selectors'

type Props = {}

const C = (props: Props) => {
  return <div>{JSON.stringify(props)}</div>
}

class <%= DIRNAME %> extends React.Component<Props> {
	render() {
		const { props } = this
		return C(props)
	}
}

const ms = (state: RootState) => ({})

const conn = connect(
	ms,
	{},
)

export default conn(<%= DIRNAME %>)
