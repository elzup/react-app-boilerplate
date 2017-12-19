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
			actions.loadPotatos([{ id: 1, owner: 1, text: 'hoge' }]),
		),
	).toEqual({ '1': { id: 1, owner: 1, text: 'hoge' } })
})
