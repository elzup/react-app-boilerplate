// @flow
import type { GoogleAuthState } from '../../types/'

import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from './actionTypes'
import type { GoogleLogin, GoogleLogout } from './actionTypes'

export function googleLogin(authState: GoogleAuthState): GoogleLogin {
	return {
		type: GOOGLE_LOGIN,
		authState,
	}
}
export function googleLogout(): GoogleLogout {
	return {
		type: GOOGLE_LOGOUT,
	}
}
