import { takeLatest, all, call } from 'redux-saga/effects';

import { Types } from './types';
import { requestAreaSuccess, requestAreaFailed } from './actions';
import { responseApi, receiveApi } from 'services/api';
import history from 'routes/history';

function* requestArea(action: any) {
  const urlParameters = Object.entries(action.payload)
    .map((e) => e.join('='))
    .join('&');
  const response = yield call(receiveApi, `calculate?${urlParameters}`);
  yield call(
    responseApi,
    response,
    () => requestAreaSuccess(response.data),
    () => requestAreaFailed(),
  );
  history.push('/areas');
}

export default all([takeLatest(Types.REQUEST_AREA, requestArea)]);
