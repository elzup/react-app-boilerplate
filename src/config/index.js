// @flow

import _combineReducers from './combineReducers'
const {
	NODE_ENV,
	RA_FIREBASE_API_KEY,
	RA_FIREBASE_AUTH_DOMAIN,
	RA_FIREBASE_DATABASE_URL,
	RA_FIREBASE_PROJECT_ID,
	RA_FIREBASE_STORAGE_BUCKET,
	RA_FIREBASE_MESSAGING_SENDER_ID,
} = process.env

if (
	!RA_FIREBASE_API_KEY ||
	!RA_FIREBASE_AUTH_DOMAIN ||
	!RA_FIREBASE_DATABASE_URL ||
	!RA_FIREBASE_PROJECT_ID ||
	!RA_FIREBASE_STORAGE_BUCKET ||
	!RA_FIREBASE_MESSAGING_SENDER_ID ||
	!NODE_ENV
) {
	console.warn(process.env)
	throw Error('Configuration not completed. must setup envioraments.')
}

type Config = {
	+isDev: boolean,
	+firebase: $npm$firebase$Config,
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
		apiKey: RA_FIREBASE_API_KEY,
		authDomain: RA_FIREBASE_AUTH_DOMAIN,
		databaseURL: RA_FIREBASE_DATABASE_URL,
		projectId: RA_FIREBASE_PROJECT_ID,
		storageBucket: RA_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: RA_FIREBASE_MESSAGING_SENDER_ID,
	},
	admin: { name: '', countMax: 0 },
	...(isDev ? configDevelopment : configProduction),
}

export const combineReducers = _combineReducers

export default config
