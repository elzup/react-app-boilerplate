// @flow
import type { State as AuthContainer } from '../containers/AuthContainer/reducer'
import type { State as GoogleAuthContainer } from '../containers/GoogleAuthContainer/reducer'
import type { State as PotatoById } from '../containers/PotatoById/reducer'
import type { State as PotatosContainer } from '../containers/PotatosContainer/reducer'
import type { State as TwitterAuthContainer } from '../containers/TwitterAuthContainer/reducer'

export type State = {
	AuthContainer: AuthContainer,
	GoogleAuthContainer: GoogleAuthContainer,
	PotatoById: PotatoById,
	PotatosContainer: PotatosContainer,
	TwitterAuthContainer: TwitterAuthContainer,
}
