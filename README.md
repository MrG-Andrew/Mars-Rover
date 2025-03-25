# Mars-Rover
Mars-Rover-Task

to run tests
- npm install
- npm test

PART I (branch:: part-1)

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

PART 2 (branch:: part-2)

added functions & obstacles detection for Rover

you can now initialize Rover with obstacles in the form [[x, y], [x1, y1]] default ones are [[1,4], [3,5], [7,4]]
e.g new Rover(x, y, direction, obstacles)

Rover is initialized with default status of ONLINE
currently the only available status are STOPPED & ONLINE

IF ROVER'S NEXT POSITION IS AN OBSTACLE ROVER STOPS AND REPORTS ITS POSITION & STATUS

new functions for Rover:

- checkStatus: will give either STOPPED or ONLINE

- set status: you can manually set status [0 --> STOPPED, 1 --> ONLINE ] (e.g rover1.status = 0)

- addObstacle: you can add to the obstacles even after initialization e.g rover1.addObstacle([1,1])

- isObstacle: checks if the given coordinate is an obstacle e.g rover1.isObstacle([1,1])

- getNextPosition: function that returns the Rover next position valid parameters are "F" and "B" for forwars and backwards respectively