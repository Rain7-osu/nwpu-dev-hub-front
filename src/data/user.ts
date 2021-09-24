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

export enum Group {
  APP = 0,
  WEB = 1,
  MINI = 2,
  UI = 3,
  OPERATE = 4,
  UNKNOWN = -1,
}

export interface UserInfo {
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
