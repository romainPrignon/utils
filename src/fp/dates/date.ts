/**
 * functional wrapper around Date
 */
const date = (val: string | number | Date): Date =>
  new Date(val)


export {
  date
}
