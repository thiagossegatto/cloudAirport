import { Types } from './types';

export function requestArea(form: any) {
  return {
    type: Types.REQUEST_AREA,
    payload: form,
  };
}

export function requestAreaSuccess(data: any) {
  return {
    type: Types.REQUEST_AREA_SUCCESS,
    payload: data,
  };
}

export function requestAreaFailed() {
  return {
    type: Types.REQUEST_AREA_FAILED,
  };
}
