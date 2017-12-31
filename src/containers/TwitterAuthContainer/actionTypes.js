// @flow
import type { FirebaseUser } from '../../types/'

export const TWITTER_LOGIN: 'TwitterAuthContainer/TWITTER_LOGIN' =
	'TwitterAuthContainer/TWITTER_LOGIN'
export const TWITTER_LOGOUT: 'TwitterAuthContainer/TWITTER_LOGOUT' =
	'TwitterAuthContainer/TWITTER_LOGOUT'

export const Actions = {
	TWITTER_LOGIN,
	TWITTER_LOGOUT,
}

export type TwitterLogin = {
	type: typeof TWITTER_LOGIN,
}
export type TwitterLogout = {
	type: typeof TWITTER_LOGOUT,
}

export type Action = TwitterLogin | TwitterLogout
