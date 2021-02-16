// used throughout the utils (convert & dates)
// export type DateRepresentation = string | Date | number | null | undefined | NgbDateStruct | NgbDate;

import _ from "lodash-es";

/** A string that can contain HTML */
export type Html = string;

export type Optional<T> = T | null | undefined;

/** If T is an Array, then the generic type of the array else T */
export type UnArray<T> = T extends Array<infer U> ? U : T;

/** A class type more or less */
export type Constructor<T> = new (...args: any[]) => T;

/** Properties of `T` that are not functions */
export type NonFunctionPropertyNames<T> = {
  // tslint:disable-next-line: ban-types
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

/** An object that has all properties of `T` minus the methods */
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

// https://stackoverflow.com/questions/47375916/typescript-how-to-create-type-with-common-properties-of-two-types
/** A type with all common properties of A and B */
export type Common<A, B> = {
  [P in keyof A & keyof B]: A[P] | B[P];
};

// https://stackoverflow.com/a/49402091/1381582
/** All the choices in a union type */
// export type KeysOfUnion<T> = T extends any ? keyof T: never;
/*
export function isHtmlFileInput(event: Event): event is HTMLInputEvent {
  return !_.isNil(event.target) && 'files' in event.target;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export type HTMLButtonType = 'submit' | 'button' | 'reset';
*/
export type AsyncFunction<T> = () => Promise<T>;
export type MaybeAsyncFunction<T> = () => T | Promise<T>;
