// @flow
import type { State as ItemById } from '../containers/ItemById/reducer'
import type { State as ItemsContainer } from '../containers/ItemsContainer/reducer'

export type State = {
	ItemById: ItemById,
	ItemsContainer: ItemsContainer,
}
