import * as u from 'src/helpers/utils';
import _ from 'lodash-es';
import { Primitive } from './utils/types.utils';

export interface Keyable {
  key: string
}

export interface KeyablePrimitive<T> extends Keyable {
  value: T
}

export function isKeyable(obj: Partial<Keyable>): obj is Keyable {
  return typeof(obj) === 'object' && 'key'in obj && typeof obj.key === 'string';
}

export function keyable<T extends Primitive>(str: T): KeyablePrimitive<T>;
export function keyable<T extends object>(obj: T): T & Keyable;
export function keyable(obj: any): Keyable {
  if(isKeyable(obj)) return obj;
  if(typeof obj === 'object') {
    obj.key = u.newGuid();
    return obj as any;
  }
  return {
    key: u.newGuid(),
    value: obj
  } as any;
}

// useless ?
export function removeByKey(items: Keyable[], key: string) {
  return _.reject(items, { key })
} 


