// @flow

const { NODE_ENV, REACT_APP_HOGE, REACT_APP_FUGA_URL } = process.env

if (REACT_APP_HOGE === null || REACT_APP_FUGA_URL === null || !NODE_ENV) {
	console.error('Configuration not completed. must setup envioraments.')
	console.error(process.env)
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
	...(isDev ? configDevelopment : configProduction),
}

export default config
