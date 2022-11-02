import * as contactActions from './actionTypes'

export const setContact = (contact) => {
    return {
        type: contactActions.SET_CONTACT,
        payload:contact
    }
}

export const updateContact = (contact) => {
  return {
    type: contactActions.UPDATE_CONTACT,
      payload: contact ,
  };
};