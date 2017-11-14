// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = number[]

export const initialState: State = []

function removeAt(a, v) {
	const i = a.indexOf(v)
	if (i > -1) {
		a.splice(i, 1)
	}
	return a
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_ITEM:
			return state.indexOf(action.item.id) > -1
				? state
				: state.concat(action.item.id)

		case Actions.DELETE_ITEM:
			return removeAt(state, action.id)

		default:
			return state
	}
}
