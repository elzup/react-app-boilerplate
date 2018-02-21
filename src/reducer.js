// @flow
import { combineReducers } from './config'
import GoogleAuthContainer from './containers/GoogleAuthContainer/reducer'
import PotatoById from './containers/PotatoById/reducer'
import PotatosContainer from './containers/PotatosContainer/reducer'
import TwitterAuthContainer from './containers/TwitterAuthContainer/reducer'

export default combineReducers({
	GoogleAuthContainer,
	PotatoById,
	PotatosContainer,
	TwitterAuthContainer,
})
