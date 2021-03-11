
/** Sleeps, but only in the current method */
export const wait = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
