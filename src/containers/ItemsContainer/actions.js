// @flow
import type { Item } from '../../types'

import { RECEIVE_ITEM, DELETE_ITEM } from './actionTypes'
import type { ReceiveItem, DeleteItem } from './actionTypes'

export function receiveItem(item: Item): ReceiveItem {
	return {
		type: RECEIVE_ITEM,
		item,
	}
}
export function deleteItem(id: number): DeleteItem {
	return {
		type: DELETE_ITEM,
		id,
	}
}
