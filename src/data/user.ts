export enum Role {
  /**
   * 开发管理权
   */
  ADMIN = 2,

  /**
   * 成员管理权
   */
  MANAGER = 1,

  /**
   * 普通用户
   */
  USER = 0,
}

/**
 * 用户所属流程状态
 */
export enum FlowStatus {
  /**
   * 项目组
   */
  WORK = 4,

  /**
   * 实习组
   */
  INTERNSHIP = 3,

  /**
   * 培训组
   */
  TRAINING = 2,

  /**
   * 筛选中（已报名）
   */
  PENDING = 1,

  /**
   * 未报名
   */
  NONE = 0,
}

/**
 * 性别
 */
export enum Gender {
  MALE = 1,
  FEMALE = 2,
  UNKNOWN = 0,
}

/**
 * 学位
 */
export enum Qualification {
  /**
   * 本科
   */
  UNDERGRADUATE = 0,

  /**
   * 硕士
   */
  MASTER = 1,

  /**
   * 博士
   */
  DOCTOR = 2,

  UNKNOWN = -1,
}

export const QualificationName: Record<Qualification, string> = {
  [Qualification.DOCTOR]: '博士',
  [Qualification.MASTER]: '硕士',
  [Qualification.UNDERGRADUATE]: '本科',
  [Qualification.UNKNOWN]: '未知学历',
};

export enum Group {
  APP = 0,
  WEB = 1,
  MINI = 2,
  UI = 3,
  OPERATE = 4,
  UNKNOWN = -1,
}

export const GroupName: Record<Group, string> = {
  [Group.APP]: 'APP组',
  [Group.UI]: 'UI组',
  [Group.WEB]: '网页组',
  [Group.MINI]: '小程序组',
  [Group.OPERATE]: '运营组',
  [Group.UNKNOWN]: '未知组别',
};

export enum Level {
  Unknown = -1,
  N0 = 1,
  N0p = 2,
  N1s = 3,
  N1 = 11,
  N1p = 12,
  N2s = 13,
  N2 = 21,
  N2p = 22,
  N3s = 23,
  N3 = 31,
  N3p = 32,
  N4s = 33,
  N4 = 41,
  N4p = 42,
  N5s = 43,
  N5 = 51,
  N5p = 52,
  P6s = 53,
  P6 = 61,
}

export const LevelName: Record<Level, string> = {
  [Level.Unknown]: 'N0-',
  [Level.N0]: 'N0',
  [Level.N0p]: 'N0+',
  [Level.N1s]: 'N1-',
  [Level.N1]: 'N1',
  [Level.N1p]: 'N1+',
  [Level.N2s]: 'N2-',
  [Level.N2]: 'N2',
  [Level.N2p]: 'N2+',
  [Level.N3s]: 'N3-',
  [Level.N3]: 'N3',
  [Level.N3p]: 'N3+',
  [Level.N4s]: 'N4-',
  [Level.N4]: 'N4',
  [Level.N4p]: 'N4+',
  [Level.N5s]: 'N5-',
  [Level.N5]: 'N5',
  [Level.N5p]: 'N5+',
  [Level.P6s]: 'P6-',
  [Level.P6]: 'P6',
};

export interface UserInfo {
  id?: number;
  username?: string;
  email?: string;
  role?: Role;
  avatar?: string;
  status?: FlowStatus;
  name?: string;
  gender?: Gender;
  department?: string;
  qualification?: Qualification;
  grade?: string;
  group?: Group;
  level?: Level;
  qq?: string;
  wechat?: string;
  experience?: string;
  introduction?: string;
}
