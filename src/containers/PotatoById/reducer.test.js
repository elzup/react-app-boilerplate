// @flow
import reducer, { initialState } from './reducer'
import * as actions from '../PotatosContainer/actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle LOAD_POTATOS', () => {
	expect(
		reducer(
			initialState,
			actions.loadPotatos({
				p1: {
					id: 'p1',
					owner: 1,
					text: 'hoge',
					publish: true,
					createdAt: 0,
				},
			}),
		),
	).toEqual({
		p1: {
			id: 'p1',
			owner: 1,
			text: 'hoge',
			publish: true,
			createdAt: 0,
		},
	})
})
