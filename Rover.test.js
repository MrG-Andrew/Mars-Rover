import Rover from "./Rover";

describe("Rover", () => {
  let rover1;

  beforeEach(() => {
    rover1 = new Rover(0, 0, "north");
  });

  test("invalid initiation", () => {
    expect(() => {
      new Rover(0, 0, "northwest");
    }).toThrow(
      "FAILED TO INITIALIZE ROVER:: Invalid Direction, Valid Directions are NORTH, EAST, SOUTH, WEST"
    );
  });

  test("initial position", () => {
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, 0) Facing NORTH"
    );
  });

  test("reporting", () => {
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, 0) Facing NORTH"
    );
  });

  test("move forward", () => {
    rover1.moveForward();
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, 1) Facing NORTH"
    );
  });

  test("move backward", () => {
    rover1.moveBackward();
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, -1) Facing NORTH"
    );
  });

  test("rotate right", () => {
    rover1.rotateRight();
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, 0) Facing EAST"
    );
  });

  test("rotate left", () => {
    rover1.rotateLeft();
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, 0) Facing WEST"
    );
  });

  test("isValidCommand", () => {
    expect(rover1.isValidCommand("frl")).toBe(true);
    expect(rover1.isValidCommand("sadfjhakls;jh  &%^&fpadsl")).toBe(false);
  });

  test("execute", () => {
    rover1.execute("fRlBb");
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, -1) Facing NORTH"
    );
  });

  test("execute with invalid command", () => {
    rover1.execute("f7r88");
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, 1) Facing EAST"
    );
  });

  test("safe execute", () => {
    rover1.safeExecute("frl");
    expect(rover1.report()).toBe(
      "Rover Current Location is (0, 1) Facing NORTH"
    );
  });

  test("safe execute with invalid command", () => {
    expect(() => rover1.safeExecute("f7r88")).toThrow("INVALID COMMAND");
  });
});
