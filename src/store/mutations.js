import {
	RECORD_ADDRESS,
	RECORD_SHOPDETAIL,
	CHANGE_COUNT,
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

import {localapi, proapi} from 'src/config/env'

export default {
	[CHANGE_COUNT](state,count){
       state.count++;
	},
	[RECORD_ADDRESS](state, {
		latitude,
		longitude
	}) {
		state.latitude = latitude;
		state.longitude = longitude;
	},

	[RECORD_SHOPDETAIL](state, detail) {
		state.shopDetail = detail;
	},

}
