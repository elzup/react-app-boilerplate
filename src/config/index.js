// @flow

import _combineReducers from './combineReducers'
const {
	NODE_ENV,
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_AUTH_DOMAIN,
	REACT_APP_FIREBASE_DATABASE_URL,
	REACT_APP_FIREBASE_PROJECT_ID,
	REACT_APP_FIREBASE_STORAGE_BUCKET,
} = process.env

if (
	!REACT_APP_FIREBASE_API_KEY ||
	!REACT_APP_FIREBASE_AUTH_DOMAIN ||
	!REACT_APP_FIREBASE_DATABASE_URL ||
	!REACT_APP_FIREBASE_PROJECT_ID ||
	!REACT_APP_FIREBASE_STORAGE_BUCKET ||
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
		+databaseUrl: string,
		+projectId: string,
		+storageBucket: string,
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
		databaseUrl: REACT_APP_FIREBASE_DATABASE_URL,
		projectId: REACT_APP_FIREBASE_PROJECT_ID,
		storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
	},
	admin: { name: '', countMax: 0 },
	...(isDev ? configDevelopment : configProduction),
}

export const combineReducers = _combineReducers

export default config
