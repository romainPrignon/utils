// test
import { date, epoch, now } from '../../../src/fp/dates'
// tslint:disable-next-line: no-duplicate-imports
import * as dates from '../../../src/fp/dates'


describe('dates', () => {

  it('should export dates namespace', () => {
    expect(Object.entries(dates).length).toEqual(3)

    expect(dates.date).toBeDefined()
    expect(dates.epoch).toBeDefined()
    expect(dates.now).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(date).toBeDefined()
    expect(epoch).toBeDefined()
    expect(now).toBeDefined()
  })
})
