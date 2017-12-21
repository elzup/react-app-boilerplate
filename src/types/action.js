// @flow
import type { Action as GoogleAuthContainerAction } from '../containers/GoogleAuthContainer/actionTypes'
import type { Action as ItemsContainerAction } from '../containers/ItemsContainer/actionTypes'
import type { Action as PotatosContainerAction } from '../containers/PotatosContainer/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action =
	| ReduxInitAction
	| GoogleAuthContainerAction
	| ItemsContainerAction
	| PotatosContainerAction
