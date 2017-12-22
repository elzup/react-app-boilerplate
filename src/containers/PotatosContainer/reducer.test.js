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
			actions.createPotato({
				owner: 0,
				text: '',
				publish: true,
				createdAt: 0,
			}),
		),
	).toEqual([])
})

test('handle LOAD_POTATOS', () => {
	expect(
		reducer(
			initialState,
			actions.loadPotatos({
				p1: { owner: 1, text: 'hoge', publish: true, createdAt: 0 },
			}),
		),
	).toEqual(['p1'])
})

test('handle LOAD_POTATOS', () => {
	expect(
		reducer(
			['p1'],
			actions.loadPotatos({
				p1: { owner: 1, text: 'hoge', publish: true, createdAt: 0 },
			}),
		),
	).toEqual(['p1'])
})
