import {request, request1} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, pagenum) {
  return request1({
    url: '/goods/search',
    params: {
      type,
      pagenum,
    }
  })
}

