/** Contains a promise we can resolve or reject from the outside */

export class Deferred<T = void> {
  public promise: Promise<T>;
  public resolve: (value: T | PromiseLike<T>) => void = () => {};
  public reject: (reason?: any) => void = () => {};

  public constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

// ----- succeeded extension for Promises ----- //

declare global {
  interface Promise<T> {
    succeeded(this: Promise<T>): Promise<boolean>;
  }
}

export async function succeeded<T>(this: Promise<T>): Promise<boolean> {
  try {
    await this;
    return true;
  } catch (error) {
    return false;
  }
}

Promise.prototype.succeeded = succeeded;
// ----- --------------------------------- ----- //
