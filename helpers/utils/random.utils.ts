import _ from 'lodash-es';

// see https://stackoverflow.com/a/26502275/1381582
// tslint:disable: no-bitwise
const randomChars = (input: string): string => {
  return input.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const newGuid = (): string => {
  return randomChars('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
};

/** Generates a random string, may start with a number */
export const newId = (size: number): string => {
  const input = _.repeat('x', size);
  return randomChars(input);
};


