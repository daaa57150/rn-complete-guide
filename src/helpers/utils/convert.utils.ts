import _ from 'lodash-es';


export const toInt = (input: string | number | null | undefined): number => {
  if (typeof (input) === 'number') {
    return Math.floor(input);
  }
  if (typeof (input) === 'string') {
    return parseInt(input, 10);
  }
  return 0;
};

export const toFloat = (input: string | number | null | undefined): number => {
  if (typeof (input) === 'number') return input;
  if (typeof (input) === 'string') {
    return _.toNumber(input);
  }
  return 0;
};

export const toString = (input: any): string | null | undefined => {
  if (_.isNil(input)) return input;
  if (typeof (input) === 'string') return input;
  if (typeof (input) === 'number') return input.toString();
  if (typeof (input) === 'boolean') return input.toString();
  // Some objects have a toString method (Errors, UrlSegments, ...)
  if ('toString' in input && typeof input.toString === 'function') {
    return input.toString();
  }
  return JSON.stringify(input);
};

// https://stackoverflow.com/a/46523651/1381582
export const toBoolean = (value: any) => value != null && `${value}` !== 'false';

// export const toStrings = (inputs: any[]): string[] => {
//   return _.map(inputs, toString);
// };

