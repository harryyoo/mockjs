/**
 *  Service
 */

import * as API from './API'
import axios from 'axios';

// 创建实例时设置配置的默认值
let instance = axios.create({
  baseURL: '/mock/ui/v1/'
});
// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 1500;
/**
 * 获取chartline
 */
export function getChartLine(id) {
  return instance.get(API.GET_CHARTLINE + id)
}
