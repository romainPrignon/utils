/**
 * wrapper around Number
 */
class Number extends globalThis.Number {
  isMultipleOf (divisor: number): boolean {
    return this.valueOf() % divisor === 0
  }
}

export {
  Number
}
