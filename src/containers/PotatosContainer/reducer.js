// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = Array<number | string>

export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.CREATE_POTATO:
			return state

		case Actions.LOAD_POTATOS:
			return [...state, ...Object.keys(action.potatos)]

		default:
			return state
	}
}
