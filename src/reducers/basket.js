import * as R from 'ramda'

import { ADD_PHONE_TO_BASKET, REMOVE_FROM_BASKET, CLEAR_BASKET } from '../actionTypes'

const initialState = []

export default(state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return R.append(payload, state) //создает новый массив с добавленным id в конце
    case REMOVE_FROM_BASKET:
      return R.without([payload], state)
    case CLEAR_BASKET:
      return initialState
    default:
      return state
  }
}
