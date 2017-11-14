// @flow
import type { Action, Item } from '../../types'
import { Actions } from '../ItemsContainer/actionTypes'

export type State = { [id: number | string]: Item }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_ITEM:
			return {
				...state,
				[action.item.id]: action.item,
			}

		case Actions.DELETE_ITEM:
			delete state[action.id]
			return state

		default:
			return state
	}
}
