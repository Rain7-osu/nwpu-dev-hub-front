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

export enum Status {
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

export enum Gender {
  MALE = 1,
  FEMALE = 2,
}

export enum Qualification {
  
}

export interface UserInfo {
  username: string;
  email: string;
  role: Role;
  avatar: string;
  status: Status;
  name: string;
  gender: Gender;
  department: string;
  qualification: Qualification
}