// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'
import _ from 'lodash'

export type State = Array<number | string>

export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.CREATE_POTATO:
			return state

		case Actions.LOAD_POTATOS:
			return _.union(state, Object.keys(action.potatos))

		default:
			return state
	}
}
