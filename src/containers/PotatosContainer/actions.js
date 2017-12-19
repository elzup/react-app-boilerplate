// @flow
import type { Potato } from '../../types'

import { CREATE_POTATO, LOAD_POTATOS } from './actionTypes'
import type { CreatePotato, LoadPotatos } from './actionTypes'

export function createPotato(potato: Potato): CreatePotato {
	return {
		type: CREATE_POTATO,
		potato,
	}
}
export function loadPotatos(potatos: Potato[]): LoadPotatos {
	return {
		type: LOAD_POTATOS,
		potatos,
	}
}
