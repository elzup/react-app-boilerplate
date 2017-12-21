// @flow
import type { Potato } from '../../types'

export const CREATE_POTATO: 'PotatosContainer/CREATE_POTATO' =
	'PotatosContainer/CREATE_POTATO'
export const LOAD_POTATOS: 'PotatosContainer/LOAD_POTATOS' =
	'PotatosContainer/LOAD_POTATOS'

export const Actions = {
	CREATE_POTATO,
	LOAD_POTATOS,
}

export type CreatePotato = {
	type: typeof CREATE_POTATO,
	potato: Potato,
}

export type LoadPotatos = {
	type: typeof LOAD_POTATOS,
	potatos: Potato[],
}

export type Action = CreatePotato | LoadPotatos
