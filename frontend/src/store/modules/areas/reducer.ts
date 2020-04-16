import produce from "immer";
import { AreaState, Types } from "./types";
import { ReducerAction } from "../types";

const INITIAL_STATE: AreaState = {
  form: null,
  data: null,
  loading: false,
};

export default function areas(state = INITIAL_STATE, action: ReducerAction): AreaState {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.REQUEST_AREA: {
        draft.loading = true;
        break;
      }
      case Types.REQUEST_AREA_SUCCESS: {
        draft.data = action.payload;
        draft.loading = false;
        break;
      }
      case Types.REQUEST_AREA_FAILED: {
        draft.data = action.payload;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
