import _ from 'lodash-es';
import * as u from 'src/helpers/utils';
import { Primitive } from './utils/types.utils';

export interface Keyable {
  key: string
}

export interface KeyablePrimitive<T> extends Keyable {
  value: T
}

export function isKeyable(obj: Partial<Keyable>|Primitive): obj is Keyable {
  return typeof(obj) === 'object' && 'key'in obj && typeof obj.key === 'string';
}

export function keyable<T extends Primitive>(str: T): KeyablePrimitive<T>;
export function keyable<T extends object>(obj: T): T & Keyable;
export function keyable(obj: Partial<Keyable>|Primitive): Keyable {
  if(isKeyable(obj)) return obj;
  if(typeof obj === 'object') {
    return { ...obj, key: u.newGuid() };
  }
  return {
    key: u.newGuid(),
    value: obj
  } as Keyable;
}

// useless ?
export function removeByKey(items: Keyable[], key: string) {
  return _.reject(items, { key })
}


