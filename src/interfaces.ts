import { Effect, Reducer, Subscription } from 'umi';

export interface IModel<T> {
  namespace: string;
  state: T;
  effects: Record<string, Effect>;
  reducers: Record<string, Reducer<T>>;
  subscriptions?: Record<string, Subscription>;
}
