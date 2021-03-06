// @flow
import type { Action as AuthContainerAction } from '../containers/AuthContainer/actionTypes'
import type { Action as GoogleAuthContainerAction } from '../containers/GoogleAuthContainer/actionTypes'
import type { Action as PotatosContainerAction } from '../containers/PotatosContainer/actionTypes'
import type { Action as TwitterAuthContainerAction } from '../containers/TwitterAuthContainer/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action =
	| ReduxInitAction
	| AuthContainerAction
	| GoogleAuthContainerAction
	| PotatosContainerAction
	| TwitterAuthContainerAction
