import {DriverStatus, isOldEnoughToDrive} from './Drivers'

describe("tests for Drivers", () => {

  test("test that driver is old enough to drive", () => {
    expect(isOldEnoughToDrive(15)).toBe(DriverStatus.TOO_YOUNG);
    expect(isOldEnoughToDrive(90)).toBe(DriverStatus.TOO_OLD);
    expect(isOldEnoughToDrive(25)).toBe(DriverStatus.ELIGIBLE);

  })
})