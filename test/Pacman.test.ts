import Pacman from '../src/Pacman'
import { IPacmanState } from '../src/types'

let pacman: Pacman

beforeEach(() => {
  pacman = new Pacman()
})

describe('Pacman', () => {
  test('should return pacman state', () => {
    const pacmanState = pacman.getState()
    const targetState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 0,
      faceDirection: 'NORTH',
    }
    expect(pacmanState).toEqual(targetState)
  })

  test('should be placed in a new position', () => {
    const targetState: IPacmanState = {
      coordinateX: 1,
      coordinateY: 1,
      faceDirection: 'SOUTH',
    }
    pacman.place(targetState)
    const pacmanState = pacman.getState()
    expect(pacmanState).toEqual(targetState)
  })
  
  test('should keep same position and return new position after tryPlace', () => {
    const targetState: IPacmanState = {
      coordinateX: 1,
      coordinateY: 1,
      faceDirection: 'SOUTH',
    }
    const originalState = pacman.getState()
    const pacmanTryState = pacman.tryPlace(targetState)
    const pacmanCurrentState = pacman.getState()
    expect(pacmanTryState).toEqual(targetState)
    expect(pacmanCurrentState).toEqual(originalState)
  })

  test('should move on unit forward', () => {
    const targetState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 1,
      faceDirection: 'NORTH',
    }
    pacman.move();
    const pacmanState = pacman.getState()
    expect(pacmanState).toEqual(targetState)
  })

  test('should keep same position and return new position after tryMove', () => {
    const targetState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 1,
      faceDirection: 'NORTH',
    }
    const originalState = pacman.getState()
    const pacmanTryState = pacman.tryMove()
    const pacmanCurrentState = pacman.getState()
    expect(pacmanTryState).toEqual(targetState)
    expect(pacmanCurrentState).toEqual(originalState)
  })

  test('should face EAST if facing NORTH and rotating RIGHT', () => {
    pacman.rotate('RIGHT')
    const faceDirection = pacman.getState().faceDirection;
    expect(faceDirection).toBe('EAST')
  })

  test('should face WEST if facing NORTH and rotating LEFT', () => {
    pacman.rotate('LEFT')
    const faceDirection = pacman.getState().faceDirection;
    expect(faceDirection).toBe('WEST')
  })

  test('should face WEST if facing SOUTH and rotating RIGHT', () => {
    const newState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 0,
      faceDirection: 'SOUTH',
    }
    pacman.place(newState)
    pacman.rotate('RIGHT')
    const faceDirection = pacman.getState().faceDirection;
    expect(faceDirection).toBe('WEST')
  })

  test('should face EAST if facing SOUTH and rotating LEFT', () => {
    const newState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 0,
      faceDirection: 'SOUTH',
    }
    pacman.place(newState)
    pacman.rotate('LEFT')
    const faceDirection = pacman.getState().faceDirection;
    expect(faceDirection).toBe('EAST')
  })

  test('should face SOUTH if facing EAST and rotating RIGHT', () => {
    const newState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 0,
      faceDirection: 'EAST',
    }
    pacman.place(newState)
    pacman.rotate('RIGHT')
    const faceDirection = pacman.getState().faceDirection;
    expect(faceDirection).toBe('SOUTH')
  })

  test('should face NORTH if facing EAST and rotating LEFT', () => {
    const newState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 0,
      faceDirection: 'EAST',
    }
    pacman.place(newState)
    pacman.rotate('LEFT')
    const faceDirection = pacman.getState().faceDirection;
    expect(faceDirection).toBe('NORTH')
  })

  test('should face NORTH if facing WEST and rotating RIGHT', () => {
    const newState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 0,
      faceDirection: 'WEST',
    }
    pacman.place(newState)
    pacman.rotate('RIGHT')
    const faceDirection = pacman.getState().faceDirection;
    expect(faceDirection).toBe('NORTH')
  })

  test('should face SOUTH if facing WEST and rotating LEFT', () => {
    const newState: IPacmanState = {
      coordinateX: 0,
      coordinateY: 0,
      faceDirection: 'WEST',
    }
    pacman.place(newState)
    pacman.rotate('LEFT')
    const faceDirection = pacman.getState().faceDirection;
    expect(faceDirection).toBe('SOUTH')
  })
})
