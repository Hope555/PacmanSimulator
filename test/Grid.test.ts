import Grid from '../src/Grid'
import { IPacmanState } from '../src/types'

let grid: Grid

beforeEach(() => {
  grid = new Grid(5, 5)
})

describe('Grid', () => {
  test('should throw error if length <= 0', () => {
    expect.assertions(1)
    try {
      grid = new Grid(-1, -1)
    } catch (error) {
      expect(error).toEqual(new Error('Invalid length'))
    }
  })
  
  test('should return false if pacman is outside grid', () => {
    const pacmanState: IPacmanState = {
      coordinateX: -1,
      coordinateY: 1,
      faceDirection: 'NORTH',
    }
    const isValid = grid.validatePacmanState(pacmanState)
    expect(isValid).toBe(false)
  })

  test('should return true if pacman is inside grid', () => {
    const pacmanState: IPacmanState = {
      coordinateX: 1,
      coordinateY: 1,
      faceDirection: 'NORTH',
    }
    const isValid = grid.validatePacmanState(pacmanState)
    expect(isValid).toBe(true)
  })
})