// @flow

import _combineReducers from './combineReducers'
const {
	NODE_ENV,
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_AUTH_DOMAIN,
	REACT_APP_FIREBASE_DATABASE_URL,
	REACT_APP_FIREBASE_PROJECT_ID,
	REACT_APP_FIREBASE_STORAGE_BUCKET,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
} = process.env

if (
	!REACT_APP_FIREBASE_API_KEY ||
	!REACT_APP_FIREBASE_AUTH_DOMAIN ||
	!REACT_APP_FIREBASE_DATABASE_URL ||
	!REACT_APP_FIREBASE_PROJECT_ID ||
	!REACT_APP_FIREBASE_STORAGE_BUCKET ||
	!REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
	!NODE_ENV
) {
	console.error(process.env)
	throw Error('Configuration not completed. must setup envioraments.')
}

type Config = {
	+isDev: boolean,
	+firebase: {
		+apiKey: string,
		+authDomain: string,
		+databaseURL: string,
		+projectId: string,
		+storageBucket: string,
		+messagingSenderId: string,
	},
	+admin: {
		+name: string,
		+countMax: number,
	},
}
const isDev = NODE_ENV === 'development'

const configDevelopment = {
	admin: {
		name: 'admin',
		countMax: 100,
	},
}
const configProduction = {
	admin: {
		name: 'proadmin',
		countMax: 100,
	},
}

const config: Config = {
	isDev,
	firebase: {
		apiKey: REACT_APP_FIREBASE_API_KEY,
		authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
		databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
		projectId: REACT_APP_FIREBASE_PROJECT_ID,
		storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	},
	admin: { name: '', countMax: 0 },
	...(isDev ? configDevelopment : configProduction),
}

export const combineReducers = _combineReducers

export default config
