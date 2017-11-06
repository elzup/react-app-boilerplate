// @flow
import { RECEIVE_ITEM, DELETE_ITEM } from './actionTypes'
import type { ReceiveItem, DeleteItem } from './actionTypes'

export function receiveItem(name: string): ReceiveItem {
	return {
		type: RECEIVE_ITEM,
		name,
	}
}
export function deleteItem(id: number): DeleteItem {
	return {
		type: DELETE_ITEM,
		id,
	}
}
