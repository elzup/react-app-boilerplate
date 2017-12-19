// @flow
import type { Potato } from '../../types'

import { CREATE_POTATO, LOAD_POTATO } from './actionTypes'
import type { CreatePotato, LoadPotato } from './actionTypes'

export function createPotato(potato: Potato): CreatePotato {
	return {
		type: CREATE_POTATO,
		potato,
	}
}
export function loadPotato(potatos: Potato[]): LoadPotato {
	return {
		type: LOAD_POTATO,
		potatos,
	}
}
