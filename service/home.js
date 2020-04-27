
import { baseURL } from './config.js';

import request from './network.js';

export function getMultiData() {
  return request({
    url: baseURL + "/home/multidata"
  })
}

export function getGoodesData(type, page) {
  return request({
    url: baseURL + "/home/data",
    data: {
      type,
      page
    }
  })
}
