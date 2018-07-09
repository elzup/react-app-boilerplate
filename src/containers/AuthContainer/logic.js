// @flow

import type { ThunkAction } from '../../types'
import * as actions from './actions'
import * as client from '../../api/client'
//
// export function requestToken({ code }: { code: string }): ThunkAction {
// 	return async (dispatch, getState) => {
// 		dispatch(actions.authStart())
// 		request
// 			.post(config.annict.baseUrl + '/oauth/token')
// 			.send({
// 				client_id: config.annict.id,
// 				client_secret: config.annict.secret,
// 				grant_type: 'authorization_code',
// 				redirect_uri: config.annict.redirect,
// 				code: code,
// 			})
// 			.end(async (err, res) => {
// 				if (err) {
// 					window.location.href = config.appPath
// 					await dispatch(actions.authEnd())
// 					return
// 				}
// 				await dispatch(actions.saveAuth(camelCaseRecursive(res.body)))
// 				await dispatch(fetchUser())
// 				await dispatch(actions.authEnd())
// 			})
// 	}
// }

export function doLogin(params: {
	email: string,
	password: string,
}): ThunkAction {
	return async dispatch => {
		dispatch(actions.authStart())
		try {
			const res = await client.postLogin(params)
			await dispatch(
				actions.saveAuth({
					accessToken: res.accessToken,
					email: res.email,
				}),
			)
		} catch (error) {
			console.error(error)
		}
		dispatch(actions.authEnd())
	}
}

export function doLogout(): ThunkAction {
	return async dispatch => {
		await dispatch(actions.removeAuth())
		document.location.reload()
	}
}
