/**
 * Created by Freeman on 2017/4/13.
 * 校验规则
 */

const required = label => value => value ? undefined : `${label}不能为空`
const maxLength = max => value =>
  value && value.length > max ? `不能多于${max}位` : undefined
const minLength = min => value =>
  value && value.length < min ? `不能少于${min}位` : undefined
//const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
//const minValue18 = minValue(18)
const validatePhone = value =>
  /^(13[0-9]|14(5|7)|15(0|1|2|3|5|6|7|8|9)|17[0-9]|18[0-9])\d{8}$/i.test(value)

const phone = value =>
  value && !validatePhone(value) ? 'Invalid phone number' : undefined

export {
  required,
  maxLength,
  minLength,
  number,
  minValue,
  phone,
  validatePhone
}
