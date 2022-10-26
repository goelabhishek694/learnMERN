import * as educationActions from "./actions";

export const setEducation = (education) => {
  return {
    type: educationActions.SET_EDUCATION,
    payload: education,
  };
};

export const updateEducation = (education) => {
  return {
    type: educationActions.UPDATE_EDUCATION,
    payload: education,
  };
};

