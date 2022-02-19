export const testCases = [
  { // case 0: mvoe
    commands: [
      'PLACE 0,0,NORTH',
      'MOVE',
      'REPORT',
    ],
    output: '0,1,NORTH'
  },
  { // case 1: rotate
    commands: [
      'PLACE 0,0,NORTH',
      'LEFT',
      'REPORT',
    ],
    output: '0,0,WEST'
  },
  { // case 2: move and rotate
    commands: [
      'PLACE 1,2,EAST',
      'MOVE',
      'LEFT',
      'MOVE',
      'LEFT',
      'MOVE',
      'LEFT',
      'MOVE',
      'LEFT',
      'REPORT',
    ],
    output: '1,2,EAST'
  },
  { // case 3: multiple place
    commands: [
      'PLACE 0,0,NORTH',
      'PLACE 1,1,NORTH',
      'REPORT',
    ],
    output: '1,1,NORTH'
  },
  { // case 4: invalid command
    commands: [
      'PLACE 0,0,NORTH',
      'INVALID COMMAND',
      'REPORT',
    ],
    output: '0,0,NORTH'
  },
  { // case 5: invalid move
    commands: [
      'PLACE 0,0,SOUTH',
      'MOVE',
      'REPORT',
    ],
    output: '0,0,SOUTH'
  },
  { // case 6: invalid place
    commands: [
      'PLACE 1,1,NORTH',
      'PLACE 100,1,NORTH',
      'REPORT',
    ],
    output: '1,1,NORTH'
  },
  { // case 7: not start until place
    commands: [
      'MOVE',
      'LEFT',
      'PLACE 1,1,NORTH',
      'REPORT',
    ],
    output: '1,1,NORTH'
  },
]