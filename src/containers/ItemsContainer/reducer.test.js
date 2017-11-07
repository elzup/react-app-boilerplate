// @flow
import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle RECEIVE_ITEM', () => {
	expect(reducer(initialState, actions.receiveItem({ name: 'Taro' }))).toEqual(
		{},
	)
})

test('handle DELETE_ITEM', () => {
	expect(reducer(initialState, actions.deleteItem({ id: 1 }))).toEqual({})
})
