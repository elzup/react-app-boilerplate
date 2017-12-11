// @flow
import type { State as GoogleAuthContainer } from '../containers/GoogleAuthContainer/reducer'
import type { State as ItemById } from '../containers/ItemById/reducer'
import type { State as ItemsContainer } from '../containers/ItemsContainer/reducer'

export type State = {
	GoogleAuthContainer: GoogleAuthContainer,
	ItemById: ItemById,
	ItemsContainer: ItemsContainer,
}
