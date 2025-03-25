////////////North

//West              //East

///////////South

class Rover {
  static DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];
  static STATUS = ["STOPPED", "ONLINE"];
  constructor(
    x,
    y,
    direction,
    obstacles = [
      [1, 4],
      [3, 5],
      [7, 4],
    ]
  ) {
    this.x = x;
    this.y = y;
    this.obstacles = obstacles;
    this._status = 1;
    direction = direction.toUpperCase();
    // only thing that exits the whole class cause rover must not be initiated with invalid direction
    if (Rover.DIRECTIONS.includes(direction)) {
      this.direction = Rover.DIRECTIONS.indexOf(direction);
    } else
      throw new Error(
        "FAILED TO INITIALIZE ROVER:: Invalid Direction, Valid Directions are NORTH, EAST, SOUTH, WEST"
      );
  }

  #forward = {
    NORTH: () => this.y++,
    EAST: () => this.x++,
    SOUTH: () => this.y--,
    WEST: () => this.x--,
  };

  #backward = {
    NORTH: () => this.y--,
    EAST: () => this.x--,
    SOUTH: () => this.y++,
    WEST: () => this.x++,
  };

  #commands = {
    F: () => this.moveForward(),
    B: () => this.moveBackward(),
    L: () => this.rotateLeft(),
    R: () => this.rotateRight(),
  };

  checkStatus() {
    return Rover.STATUS[this._status];
  }

  set status(value) {
    if (value in Rover.STATUS) {
      this._status = value;
    } else {
      this._status = 0;
    }
  }

  addObstacle(point) {
    if (Array.isArray(point) && point.length === 2) {
      this.obstacles.push(point);
    } else {
      throw new Error(
        "INVALID OBSTACLE POINT\n point must be in the form [x, y]"
      );
    }
  }

  getNextPosition(direction) {
    if (direction !== "F" && direction !== "B")
      throw new Error("INVALID DIRECTION");

    const deltas = {
      NORTH: [0, 1],
      EAST: [1, 0],
      SOUTH: [0, -1],
      WEST: [-1, 0],
    };

    const multiplier = direction === "F" ? 1 : -1;
    const [dx, dy] = deltas[Rover.DIRECTIONS[this.direction]];
    return [this.x + dx * multiplier, this.y + dy * multiplier];
  }

  isObstacle([x, y]) {
    return this.obstacles.some(
      (coordinate) => coordinate[0] === x && coordinate[1] === y
    );
  }

  report() {
    return `(${this.x}, ${this.y}) ${Rover.DIRECTIONS[this.direction]} ${
      Rover.STATUS[this._status]
    }`;
  }

  moveForward() {
    if (this._status === 0) return;
    const nextPosition = this.getNextPosition("F");
    if (!this.isObstacle(nextPosition)) {
      this.#forward[Rover.DIRECTIONS[this.direction]]();
    } else {
      this._status = 0;
    }
  }

  moveBackward() {
    if (this._status === 0) return;
    const nextPosition = this.getNextPosition("B");
    if (!this.isObstacle(nextPosition)) {
      this.#backward[Rover.DIRECTIONS[this.direction]]();
    } else {
      this._status = 0;
    }
  }

  rotateRight() {
    this.direction = (this.direction + 1) % 4;
  }

  rotateLeft() {
    this.direction = (this.direction + 3) % 4;
  }

  /*
  will move the rover even if some invalid commands are given
  can be modified to break if invalid command is given
  can add a function to check if every command is valid and fire it before moving
  can add a function to not move at all if any invalid command is given
  */
  isValidCommand(commands) {
    return [...commands.toUpperCase()].every(
      (command) => command in this.#commands
    );
  }

  execute(commands) {
    if (this._status === 0) return;
    for (let command of commands.toUpperCase()) {
      if (this._status === 0) break;
      if (command in this.#commands) {
        this.#commands[command]();
      } else {
        console.log("INVALID COMMAND");
      }
    }
  }

  safeExecute(commands) {
    if (this._status === 0) return;
    if (this.isValidCommand(commands)) {
      this.execute(commands);
    } else throw new Error("INVALID COMMAND");
  }
}

export default Rover;
