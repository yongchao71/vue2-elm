import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

export const testFetch = () => fetch('/v1/cities', {
	type: 'this is test fetch data'
});