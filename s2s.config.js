// @flow
const path = require('path')
const reduxPlugins = require('s2s-plugins-redux')

const { templates, templatesDir } = require('s2s-templates-redux')

const reducerRootPlugin = require('babel-plugin-s2s-reducer-root').default

const cwd = process.cwd()

const getRootDir = (...x) => path.resolve(cwd, 'src', ...x)

const rootReducerPath = getRootDir('reducer.js')

// @HACKME can't replace plugins smarty
const customPlugins = [
	{
		test: /containers\/.+reducer.js/,
		input: rootReducerPath,
		output: rootReducerPath,
		plugin: [
			reducerRootPlugin,
			{
				input: 'src/containers/**/reducer.js',
				output: rootReducerPath,
				combineReducers: './config',
			},
		],
	},
]

const plugins = [
	...reduxPlugins.filter(v => v.plugin[0]().name !== reducerRootPlugin().name),
	...customPlugins,
]

module.exports = {
	plugins,
	templatesDir,
	templates,
}
