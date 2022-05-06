import {request1} from "./request";

export function getDetail(goods_id) {
  return request1({
    url: '/goods/detail',
    params: {
      goods_id
    }
  })
}
