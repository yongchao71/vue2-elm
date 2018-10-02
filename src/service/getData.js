import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

export const testFetch = () => fetch('/v1/cities', {
	type: 'this is test fetch data'
});
export const getUserList = () => fetch('/users/list', {
	type: 'get user list info-----'
});