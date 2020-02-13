import l from 'lodash/fp'

const isMultipleOf = l.curry((divisor: number, val: number): boolean =>
  val % divisor === 0
)

export {
  isMultipleOf
}
