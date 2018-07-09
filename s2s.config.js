// @flow
const path = require('path')
const reduxPlugins = require('s2s-plugins-redux')
const { templates, templatesDir } = require('s2s-templates-redux')
const reducerRootPlugin = require('babel-plugin-s2s-reducer-root').default
const initialStateCreatorPlugin = require('babel-plugin-s2s-initial-state-creater')
	.default

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

const removePluginNames = [
	reducerRootPlugin().name,
	initialStateCreatorPlugin().name,
]

const plugins = [
	...reduxPlugins.filter(
		v => removePluginNames.indexOf(v.plugin[0]().name) === -1,
	),
	...customPlugins,
]

module.exports = {
	plugins,
	templatesDir,
	templates,
}
