// @flow
import type { GoogleAuthPayload } from '../../types/'

import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from './actionTypes'
import type { GoogleLogin, GoogleLogout } from './actionTypes'

export function googleLogin(payload: GoogleAuthPayload): GoogleLogin {
	return {
		type: GOOGLE_LOGIN,
		payload,
	}
}
export function googleLogout(): GoogleLogout {
	return {
		type: GOOGLE_LOGOUT,
	}
}
