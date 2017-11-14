// @flow
import reducer, { initialState } from './reducer'
import * as actions from '../ItemsContainer/actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle RECEIVE_ITEM', () => {
	expect(
		reducer(initialState, actions.receiveItem({ id: 1, name: 'Hoge' })),
	).toEqual({ '1': { id: 1, name: 'Hoge' } })
})

test('handle DELETE_ITEM', () => {
	expect(
		reducer(
			{ '1': { id: 1, name: 'Hoge' }, '2': { id: 2, name: 'Foo' } },
			actions.deleteItem(1),
		),
	).toEqual({ '2': { id: 2, name: 'Foo' } })
})
