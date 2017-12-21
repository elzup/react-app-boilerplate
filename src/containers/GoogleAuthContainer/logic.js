// @flow
import firebase from 'firebase'

import { firebaseDb } from '../../firebase'
import type { ThunkAction, FirebaseUser } from '../../types'
import * as actions from './actions'

const ref = firebaseDb.ref('potato')

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

export function addPotato(text: string): ThunkAction {
	return dispatch => {
		ref
			.push({
				publish: false,
				text: text,
			})
			.catch(error => console.error(error.message))
	}
}
