import * as R from 'ramda'

import {FETCH_CATEGORIES_SUCCESS} from '../actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), action.payload)
      return R.mergeDeepRight(state, newValues)
    default:
      return state
  }
  
}