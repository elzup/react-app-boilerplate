// @flow
import firebase from 'firebase'

import { firebaseDb } from '../../firebase'
import type { ThunkAction, FirebaseUser } from '../../types'
import * as actions from './actions'
import { loadPotatos } from '../PotatosContainer/actions'

export function doLogin(): ThunkAction {
	return dispatch => {
		const provider = new firebase.auth.TwitterAuthProvider()
		firebase.auth().signInWithPopup(provider)
	}
}

export function refLogin(): ThunkAction {
	return dispatch => {
		firebase.auth().onAuthStateChanged((user: ?FirebaseUser) => {
			if (!user) {
				return
			}
			dispatch(actions.twitterLogin(user))
			dispatch(watchPotatoes())
		})
	}
}

export function addPotato(text: string): ThunkAction {
	return dispatch => {
		const user = firebase.auth().currentUser
		if (!user) {
			console.error('no auth login')
			return
		}
		const myPotatoesRef = firebaseDb.ref(`users/${user.uid}/`).child('potatoes')

		myPotatoesRef
			.push({
				publish: false,
				text: text,
				timestamp: firebase.database.ServerValue.TIMESTAMP,
			})
			.catch(error => console.error(error.message))
	}
}

export function watchPotatoes(): ThunkAction {
	return dispatch => {
		const user = firebase.auth().currentUser
		if (!user) {
			console.error('no auth login')
			return
		}
		const myPotatoesRef = firebaseDb.ref(`users/${user.uid}/`).child('potatoes')
		myPotatoesRef.on(
			'value',
			snapshot => {
				dispatch(loadPotatos(snapshot.val() || {}))
			},
			console.error,
		)
	}
}
