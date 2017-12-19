// @flow

import firebase from 'firebase'
import config from '../config'

const firebaseConf: Object = config.firebase
export const firebaseApp = firebase.initializeApp(firebaseConf)
export const firebaseDb = firebaseApp.database()
