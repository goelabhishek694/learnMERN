import * as documentActions from '../actions/actionTypes'
import initialState from './initialState.json'

const documentReducer = (state = initialState.document, action) => {
    switch (action.type) {
      case documentActions.SET_SKIN:
        return {
          ...state,
          id: action.payload.id,
          skinCd: action.payload.skinCd,
        };
      case documentActions.UPDATE_SKIN:
        return {
          ...state,
          skinCd: action.payload.skinCd,
        };
      default:
        return state;
    }
}

export default documentReducer
