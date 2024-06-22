export const SET_DATA = 'SET_DATA';

export function setData(id, data) {
  return {
    type: SET_DATA,
    payload: {
      id,
      data,
    },
  };
}