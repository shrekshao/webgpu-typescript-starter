/**
 * Asserts `condition` is true. Otherwise, throws an `Error` with the provided message.
 */
export function assert(
    condition: boolean,
    msg?: string | (() => string)
  ): asserts condition {
    if (!condition) {
      throw new Error(msg && (typeof msg === 'string' ? msg : msg()));
    }
  }

/** If the argument is an Error, throw it. Otherwise, pass it back. */
export function assertOK<T>(value: Error | T): T {
if (value instanceof Error) {
    throw value;
}
return value;
}

/**
 * Assert this code is unreachable. Unconditionally throws an `Error`.
 */
export function unreachable(msg?: string): never {
throw new Error(msg);
}
  