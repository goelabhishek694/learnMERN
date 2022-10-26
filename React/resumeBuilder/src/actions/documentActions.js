import * as documentActions from './actions'
import { v4 as uuidv4 } from 'uuid';

export const setDocument = (skinCode) => {
    return {
        type: documentActions.SET_SKIN,
        payload: {
            id:uuidv4(),
            skinCode
        }
    }
}

export const updateDocument = (skinCode) => {
  return {
    type: documentActions.SET_SKIN,
    payload: {
      skinCode,
    },
  };
};