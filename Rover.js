////////////North

//West              //East

///////////South

class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.dir = ["NORTH", "EAST", "SOUTH", "WEST"];
    direction = direction.toUpperCase();
    // only thing that exits the whole class cause rover must not be initiated with invalid direction
    if (this.dir.includes(direction)) {
      this.direction = this.dir.indexOf(direction);
    } else
      throw new Error(
        "FAILED TO INITIALIZE ROVER:: Invalid Direction, Valid Directions are NORTH, EAST, SOUTH, WEST"
      );
    console.log("Rover Initialized Successfully::", this.report());
  }

  _forward = {
    NORTH: () => this.y++,
    EAST: () => this.x++,
    SOUTH: () => this.y--,
    WEST: () => this.x--,
  };

  _backward = {
    NORTH: () => this.y--,
    EAST: () => this.x--,
    SOUTH: () => this.y++,
    WEST: () => this.x++,
  };

  _commands = {
    F: () => this.moveForward(),
    B: () => this.moveBackward(),
    L: () => this.rotateLeft(),
    R: () => this.rotateRight(),
  };

  report() {
    return `Rover Current Location is (${this.x}, ${this.y}) Facing ${
      this.dir[this.direction]
    }`;
  }

  moveForward() {
    this._forward[this.dir[this.direction]]();
    console.log(this.report());
  }

  moveBackward() {
    this._backward[this.dir[this.direction]]();
    console.log(this.report());
  }

  rotateRight() {
    this.direction = (this.direction + 1) % 4;
    console.log(this.report());
  }

  rotateLeft() {
    this.direction = (this.direction + 3) % 4;
    console.log(this.report());
  }

  /*
  will move the rover even if some invalid commands are given
  can be modified to break if invalid command is given
  can add a function to check if every command is valid and fire it before moving
  can add a function to not move at all if any invalid command is given
  */
  isValidCommand(commands) {
    return [...commands.toUpperCase()].every(
      (command) => command in this._commands
    );
  }

  execute(commands) {
    for (let command of commands.toUpperCase()) {
      command in this._commands ? this._commands[command]() : "INVALID COMMAND";
    }
  }

  safeExecute(commands) {
    if (this.isValidCommand(commands)) {
      this.execute(commands);
    } else throw new Error("INVALID COMMAND");
  }
}

export default Rover;

let rover1 = new Rover(0, 0, "north");

// rover1.execute("frl");
rover1.execute("asfdasdfsadfkjbvdslkuywuqioerywuqenmxzbnbaehtw");
// rover1.execute("f7f88");
