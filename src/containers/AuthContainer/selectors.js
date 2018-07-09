// @flow
import type { State } from '../../types'

export function isLogin(state: State) {
	return state.AuthContainer.authorized
}

export function getToken(state: State) {
	return state.AuthContainer.accessToken
}

export function getAuthLoading(state: State) {
	return state.AuthContainer.authLoading
}
