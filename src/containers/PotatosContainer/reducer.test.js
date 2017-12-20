// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle CREATE_POTATO', () => {
	expect(
		reducer(
			initialState,
			actions.createPotato({ id: 0, owner: 0, text: '', publish: true }),
		),
	).toEqual([])
})

test('handle LOAD_POTATOS', () => {
	expect(
		reducer(
			initialState,
			actions.loadPotatos([{ id: 1, owner: 1, text: 'hoge', publish: true }]),
		),
	).toEqual([1])
})
