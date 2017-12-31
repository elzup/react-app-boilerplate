// @flow
import type { FirebaseUser } from '../../types/'

import { TWITTER_LOGIN, TWITTER_LOGOUT } from './actionTypes'
import type { TwitterLogin, TwitterLogout } from './actionTypes'

export function twitterLogin(): TwitterLogin {
	return {
		type: TWITTER_LOGIN,
	}
}
export function twitterLogout(): TwitterLogout {
	return {
		type: TWITTER_LOGOUT,
	}
}
