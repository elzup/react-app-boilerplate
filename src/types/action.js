// @flow
import type { Action as ItemsContainerAction } from '../containers/ItemsContainer/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action = ReduxInitAction | ItemsContainerAction
