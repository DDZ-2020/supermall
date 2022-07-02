// 请求home中需要用到的所有数据
import { request } from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

// 请求home中的Goods数据，需要传递参数，因为获取的是不用type的数据
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}