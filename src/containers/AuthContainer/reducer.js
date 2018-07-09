// @flow
import type { Action, Auth0 } from '../../types'
import { Actions } from './actionTypes'

export type State = Auth0

export const initialState: State = {
	authorized: false,
	authLoading: false,
	email: 'NoLogin',
	accessToken: '',
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.AUTH_START:
			return {
				...state,
				authLoading: true,
			}

		case Actions.AUTH_END:
			return {
				...state,
				authLoading: false,
			}

		case Actions.REMOVE_AUTH:
			return initialState

		case Actions.SAVE_AUTH:
			return {
				...state,
				authorized: true,
				...action.auth,
			}

		default:
			return state
	}
}
