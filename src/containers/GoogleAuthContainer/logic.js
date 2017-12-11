// @flow
import firebase from 'firebase'

import type { ThunkAction, FirebaseUser } from '../../types'
import * as actions from './actions'

export function doLogin(): ThunkAction {
	return dispatch => {
		const provider = new firebase.auth.GoogleAuthProvider()
		firebase.auth().signInWithPopup(provider)
	}
}

export function refLogin(): ThunkAction {
	return dispatch => {
		firebase.auth().onAuthStateChanged((user: ?FirebaseUser) => {
			if (!user) {
				return
			}
			dispatch(actions.googleLogin(user))
		})
	}
}
