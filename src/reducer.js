// @flow
import { combineReducers } from './config'
import AuthContainer from './containers/AuthContainer/reducer'
import GoogleAuthContainer from './containers/GoogleAuthContainer/reducer'
import PotatoById from './containers/PotatoById/reducer'
import PotatosContainer from './containers/PotatosContainer/reducer'
import TwitterAuthContainer from './containers/TwitterAuthContainer/reducer'

export default combineReducers({
	AuthContainer,
	GoogleAuthContainer,
	PotatoById,
	PotatosContainer,
	TwitterAuthContainer,
})
