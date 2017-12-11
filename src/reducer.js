// @flow
import { combineReducers } from './config'
import GoogleAuthContainer from './containers/GoogleAuthContainer/reducer'
import ItemById from './containers/ItemById/reducer'
import ItemsContainer from './containers/ItemsContainer/reducer'

export default combineReducers({
	GoogleAuthContainer,
	ItemById,
	ItemsContainer,
})
