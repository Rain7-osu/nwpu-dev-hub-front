import { FlowStatus, Gender, Group, Qualification, Role, UserInfo } from '../data/user';
import type { Model } from './types';

export interface GlobalState {
  userInfo: UserInfo;
}

export const initState: GlobalState = {
  userInfo: {
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
  },
  effects: {
    * getUserInfo() {
      // TODO: fetch user info
    },
  },
};

export default model;
