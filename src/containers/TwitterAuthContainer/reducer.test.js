// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle TWITTER_LOGIN', () => {
	expect(
		reducer(
			initialState,
			actions.twitterLogin({
				uid: 'hoge',
				displayName: 'ハロー',
				email: 'piyo@a.b',
			}),
		),
	).toEqual({
		authorized: true,
		uid: 'hoge',
		displayName: 'ハロー',
		email: 'piyo@a.b',
	})
})

test('handle TWITTER_LOGOUT', () => {
	expect(reducer(initialState, actions.twitterLogout())).toEqual({
		authorized: false,
		uid: '',
		displayName: '',
		email: '',
	})
})
