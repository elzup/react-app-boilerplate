// @flow
import type { Action, Potato } from '../../types'
import { Actions } from '../PotatosContainer/actionTypes'

export type State = { [id: string | number]: Potato }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.LOAD_POTATOS:
			return { ...state, ...action.potatos }

		default:
			return state
	}
}
