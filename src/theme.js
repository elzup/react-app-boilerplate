// @flow

import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'
// import lime from '@material-ui/core/colors/lime'

const theme = createMuiTheme({
	palette: {
		primary: { ...indigo, main: '#5C6BC0' },
		error: orange,
		// secondary: lime,
	},
	typography: {
		display1: {
			padding: '20px',
		},
		title: {
			padding: '10px',
		},
	},
	overrides: {
		MuiPaper: {
			root: {
				padding: '10px',
				marginBottom: '10px',
			},
		},
		MuiSvgIcon: {
			root: {
				marginTop: '5px',
				marginRight: '5px',
			},
		},
		MuiFormControl: {
			root: {
				width: '100%',
			},
		},
	},
})
export default theme
