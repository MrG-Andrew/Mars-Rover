# Mars-Rover
Mars-Rover-Task

PART I

Rover Class Should be initiated (new Rover(x, y, direction))

Rover can:

- report: to report the Rover's current location and direction 
- moveForward: to move Forward one step in the current direction
- moveBackward: to move Backwards one step in the current direction
- rotateRight: to rotate the Rover to the right e.g (North to East)
- rotateLeft: to rotate the ROver to the left e.g (North to West)

- execute: is a function that takes a string of characters (commands) to move the Rover (this function will move the rover even if the rover have some invalid commands)
    Valid Commands are:
        F --> to move Forward one step in the current direction
        B --> to move Backwards one step in the current direction
        R --> to rotate the Rover to the right e.g (North to East)
        L --> to rotate the ROver to the left e.g (North to West)

- safeExecute: is a function that takes a string of characters (commands) to move the Rover (this function will not run if it contains any invalid command)
    Valid Commands are:
        F --> to move Forward one step in the current direction
        B --> to move Backwards one step in the current direction
        R --> to rotate the Rover to the right e.g (North to East)
        L --> to rotate the ROver to the left e.g (North to West)

- isValidCommand: is a helper function to check if the command valid or not