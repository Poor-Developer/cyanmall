import {request} from './request';

export function getHomeMulitData() {
  return request({
		url:'/home/multidata'
	})
}

export function getHomeGoods(params) {
  return request({
		url:'/home/data',
		params
	})
}