import * as u from '@helpers/utils';
import _ from 'lodash-es';

// export interface Keyable {
//   key: string
// }

// export function isKeyable(obj: Partial<Keyable>): obj is Keyable {
//   return 'key' in obj && typeof obj.key === 'string';
// }

// /** Adds a generated key on the object if it doesn't  have  any */
// export function keyable(obj: Partial<Keyable>): Keyable {
//   if(isKeyable(obj)) return obj;
  
//   obj.key = u.newGuid();
//   return obj as any;
// }

export interface Keyable {
  key: string
}

export interface KeyablePrimitive<T> extends Keyable {
  value: T
}

export function isKeyable(obj: Partial<Keyable>): obj is Keyable {
  return typeof(obj) === 'object' && 'key'in obj && typeof obj.key === 'string';
}

export type Primitive = string | number | bigint | boolean | symbol | null | undefined;


// export function keyable

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

export function removeByKey(items: Keyable[], key: string) {
  return _.reject(items, { key })
} 


