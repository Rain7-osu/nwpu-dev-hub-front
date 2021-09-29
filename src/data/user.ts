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
  qq?: string;
  wechat?: string;
  experience?: string;
  introduction?: string;
}
