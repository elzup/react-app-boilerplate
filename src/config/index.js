// @flow

import _combineReducers from './combineReducers'
const { NODE_ENV, REACT_APP_HOGE, REACT_APP_FUGA_URL } = process.env

if (!REACT_APP_HOGE || !REACT_APP_FUGA_URL || !NODE_ENV) {
	console.error(process.env)
	throw Error('Configuration not completed. must setup envioraments.')
}

type Config = {
	+isDev: boolean,
	+hoge: string,
	+fugaURL: string,
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
	hoge: REACT_APP_HOGE,
	fugaURL: REACT_APP_FUGA_URL,
	admin: { name: '', countMax: 0 },
	...(isDev ? configDevelopment : configProduction),
}

export const combineReducers = _combineReducers

export default config
