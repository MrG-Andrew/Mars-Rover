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
    expect(rover1.report()).toBe("(0, 0) NORTH ONLINE");
  });

  test("reporting", () => {
    expect(rover1.report()).toBe("(0, 0) NORTH ONLINE");
  });

  test("check status", () => {
    expect(rover1.checkStatus()).toBe("ONLINE");
  });

  test("set status", () => {
    rover1.status = 0;
    rover1.execute("lkweroiurewofff");
    expect(rover1.checkStatus()).toBe("STOPPED");
    expect(rover1.report()).toBe("(0, 0) NORTH STOPPED");

    rover1.status = 1;
    expect(rover1.checkStatus()).toBe("ONLINE");

    rover1.status = 2342;
    expect(rover1.checkStatus()).toBe("STOPPED");

    rover1.status = "ONLINE";
    expect(rover1.checkStatus()).toBe("STOPPED");
  });

  test("add obstacles", () => {
    rover1.addObstacle([3, 5]);
    expect(
      rover1.obstacles.some(
        (coordinate) => coordinate[0] === 3 && coordinate[1] === 5
      )
    ).toBe(true);
  });

  test("add obstacles with invalid input", () => {
    expect(() => rover1.addObstacle([3])).toThrow(
      "INVALID OBSTACLE POINT\n point must be in the form [x, y]"
    );
  });

  test("get next position", () => {
    expect(rover1.getNextPosition("F")).toEqual([0, 1]);
    expect(rover1.getNextPosition("B")).toEqual([0, -1]);
  });

  test("get next position with invalid direction", () => {
    expect(() => rover1.getNextPosition("d")).toThrow("INVALID DIRECTION");
  });

  test("is obstacle", () => {
    rover1.addObstacle([0, 1]);
    expect(rover1.isObstacle([0, 1])).toBe(true);
    expect(rover1.isObstacle([1, 4])).toBe(true);
    expect(rover1.isObstacle([1, 1])).toBe(false);
  });

  test("move forward", () => {
    rover1.moveForward();
    expect(rover1.report()).toBe("(0, 1) NORTH ONLINE");
  });

  test("move backward", () => {
    rover1.moveBackward();
    expect(rover1.report()).toBe("(0, -1) NORTH ONLINE");
  });

  test("rotate right", () => {
    rover1.rotateRight();
    expect(rover1.report()).toBe("(0, 0) EAST ONLINE");
  });

  test("rotate left", () => {
    rover1.rotateLeft();
    expect(rover1.report()).toBe("(0, 0) WEST ONLINE");
  });

  test("isValidCommand", () => {
    expect(rover1.isValidCommand("frl")).toBe(true);
    expect(rover1.isValidCommand("sadfjhakls;jh  &%^&fpadsl")).toBe(false);
  });

  test("execute", () => {
    rover1.execute("fRlBb");
    expect(rover1.report()).toBe("(0, -1) NORTH ONLINE");
  });

  test("execute with invalid command", () => {
    rover1.execute("f7r88");
    expect(rover1.report()).toBe("(0, 1) EAST ONLINE");
  });

  test("safe execute", () => {
    rover1.safeExecute("frl");
    expect(rover1.report()).toBe("(0, 1) NORTH ONLINE");
  });

  test("safe execute with invalid command", () => {
    expect(() => rover1.safeExecute("f7r88")).toThrow("INVALID COMMAND");
  });

  test("moved to obstacle", () => {
    rover1.addObstacle([0, 2]);
    rover1.execute("flrlrlrlrff");
    expect(rover1.checkStatus()).toBe("STOPPED");
    expect(rover1.report()).toBe("(0, 1) NORTH STOPPED");
  });
});
