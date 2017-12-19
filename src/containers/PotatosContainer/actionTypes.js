// @flow
import type { Potato } from '../../types'

export const CREATE_POTATO: 'PotatosContainer/CREATE_POTATO' =
	'PotatosContainer/CREATE_POTATO'
export const LOAD_POTATO: 'PotatosContainer/LOAD_POTATO' =
	'PotatosContainer/LOAD_POTATO'

export const Actions = {
	CREATE_POTATO,
	LOAD_POTATO,
}

export type CreatePotato = {
	type: typeof CREATE_POTATO,
	potato: Potato,
}

export type LoadPotato = {
	type: typeof LOAD_POTATO,
	potatos: Potato[],
}

export type Action = CreatePotato | LoadPotato
