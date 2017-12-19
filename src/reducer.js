// @flow
import { combineReducers } from './config'
import GoogleAuthContainer from './containers/GoogleAuthContainer/reducer'
import ItemById from './containers/ItemById/reducer'
import ItemsContainer from './containers/ItemsContainer/reducer'
import PotatoById from './containers/PotatoById/reducer'
import PotatosContainer from './containers/PotatosContainer/reducer'

export default combineReducers({
	GoogleAuthContainer,
	ItemById,
	ItemsContainer,
	PotatoById,
	PotatosContainer,
})
