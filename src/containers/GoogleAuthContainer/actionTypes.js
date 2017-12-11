// @flow
import type { GoogleAuthState } from '../../types/'

export const GOOGLE_LOGIN: 'GoogleAuthContainer/GOOGLE_LOGIN' =
	'GoogleAuthContainer/GOOGLE_LOGIN'
export const GOOGLE_LOGOUT: 'GoogleAuthContainer/GOOGLE_LOGOUT' =
	'GoogleAuthContainer/GOOGLE_LOGOUT'

export const Actions = {
	GOOGLE_LOGIN,
	GOOGLE_LOGOUT,
}

export type GoogleLogin = {
	type: typeof GOOGLE_LOGIN,
	authState: GoogleAuthState,
}

export type GoogleLogout = {
	type: typeof GOOGLE_LOGOUT,
}

export type Action = GoogleLogin | GoogleLogout
