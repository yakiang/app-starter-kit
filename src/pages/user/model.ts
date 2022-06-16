import { IModel } from '@/interfaces';
import { sGetMyself } from './service';

export interface IUserState {
  name: string;
}

const Model: IModel<IUserState> = {
  namespace: 'user',

  state: {
    name: '',
  },

  effects: {
    *eGetMyself({}, { call, put }) {
      const resp = yield call(sGetMyself);
      if (resp.name) {
        yield put({
          type: 'rUpdateMyself',
          payload: resp,
        });
      }
    },
  },

  reducers: {
    rUpdateMyself(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default Model;
