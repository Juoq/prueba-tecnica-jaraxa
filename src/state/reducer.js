import { SET_DATA } from "./action";

const initialDataState = {};

export default function dataState(
  state = initialDataState,
  { type, payload }
) {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          ...payload.data,
        },
      };
    default:
      return state;
  }
}
