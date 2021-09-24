import type { EffectsMapObject, SubscriptionsMapObject } from 'dva';
import type { Action } from 'redux';

export type Reducer<S, A> = (prevState: S, action: A) => S;

export interface CustomAction<T> extends Action {
  [key: string]: any;
  type: string;
  payload: T;
}

export interface Model<State = any, Payload = any> {
  namespace?: string;
  state?: State;
  reducers?: {
    [key: string]: Reducer<State, CustomAction<Payload>>
  };
  effects?: EffectsMapObject;
  subscriptions?: SubscriptionsMapObject;
}
