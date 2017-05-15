/**
 * Created by Freeman on 2017/3/16.
 */

import moment from 'moment'


/**
 * 格式化日期
 * @param value     日期毫秒值
 * @param format    格式
 * @returns {string}
 */
export const formatDate = function (value, format = 'YYYY-MM-DD') {
  if (!value) {
    return ''
  }
  return moment.unix(Number(value)).format(format)
}
