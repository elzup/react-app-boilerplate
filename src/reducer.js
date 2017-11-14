// @flow
import { combineReducers } from './config'
import ItemById from './containers/ItemById/reducer'
import ItemsContainer from './containers/ItemsContainer/reducer'

export default combineReducers({
	ItemById,
	ItemsContainer,
})
