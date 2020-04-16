import { all } from 'redux-saga/effects';

import areas from './areas/saga';

export default function* rootSaga(): Generator {
  return yield all([areas]);
}
