// @flow
import firebase from 'firebase'

import type { ThunkAction, GoogleAuthState } from '../../types'
import * as actions from './actions'

export function doLogin(): ThunkAction {
	return dispatch => {
		const provider = new firebase.auth.GoogleAuthProvider()
		firebase.auth().signInWithPopup(provider)
	}
}

export function refLogin(): ThunkAction {
	return dispatch => {
		firebase.auth().onAuthStateChanged((user: GoogleAuthState) => {
			if (!user) {
				return
			}
			dispatch(actions.googleLogin(user))
		})
	}
}
