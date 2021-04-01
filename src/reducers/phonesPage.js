import * as R from 'ramda'

import {FETCH_PHONES_SUCCESS, LOAD_PHONES_SUCCESS, SEARCH_PHONE} from '../actionTypes'

const initialState = {
  ids: [],
  search: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      return R.mergeDeepRight(state, {
        ids: R.pluck('id', action.payload)
      })
    case LOAD_PHONES_SUCCESS:
      const ids = R.pluck('id', action.payload)
      return R.mergeDeepRight(state, {
        ids: R.concat(state.ids, ids)
      })
      case SEARCH_PHONE:
        return R.mergeDeepRight(state, {
          search: action.payload
        })
    default:
      return state
  }
}