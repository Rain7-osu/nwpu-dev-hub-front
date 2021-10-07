import { FlowStatus, Gender, Group, Qualification, Role, UserInfo } from '../data/user';
import type { Model } from './types';
import { fetchUserInfo } from '@src/api/fetchUserInfo';
import { clearAccessToken } from '@src/api/token';

export interface GlobalState {
  userInfo: UserInfo;
}

export const initState: GlobalState = {
  userInfo: {
    id: -1,
    username: '',
    email: '',
    role: Role.USER,
    avatar: '',
    status: FlowStatus.NONE,
    name: '',
    gender: Gender.UNKNOWN,
    department: '',
    qualification: Qualification.UNKNOWN,
    grade: '',
    group: Group.UNKNOWN,
    qq: '',
    wechat: '',
    experience: '',
    introduction: '',
  },
};

const model: Model<GlobalState> = {
  namespace: 'global',
  state: initState,
  reducers: {
    setUserInfo(state = initState, { payload }: { payload: UserInfo }) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...payload,
        },
      };
    },
    clearUserInfo(state = initState) {
      clearAccessToken();
      console.log('log out');

      return {
        ...state,
        userInfo: initState.userInfo,
      };
    },
  },
  effects: {
    * getUserInfo(_, { put }) {
      const res = yield fetchUserInfo();
      const userInfo: UserInfo = {
        ...res,
        group: res.groupId,
      };
      yield put({
        type: 'setUserInfo',
        payload: userInfo,
      });
    },
    * logout(_, { put }) {
      yield put({
        type: 'clearUserInfo',
      });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'getUserInfo',
      });
    },
  },
};

export default model;
