import * as R from 'ramda'

import {FETCH_PHONES_SUCCESS, LOAD_PHONES_SUCCESS, FETCH_PHONE_BY_ID_SUCCESS} from '../actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), action.payload)
      return R.mergeDeepRight(state, newValues)
    case LOAD_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), action.payload)
      return R.mergeDeepRight(state, moreValues)
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(action.payload.id, action.payload, state) //обновляем state с ключом id и передаем данные payload
    default:
      return state
  }
  
}