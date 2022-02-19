import Game from '../src/Game'
import { testCases } from './testCases'

let game: Game;
let spy: jest.SpyInstance

beforeEach(() => {
  game = new Game()
  spy = jest.spyOn(console, 'log')
})

afterEach(() => {
  spy.mockRestore();
})

describe('Game', () => {
  test('move: should output 0,1,NORTH', () => {
    game.run(testCases[0].commands)
    expect(spy).toHaveBeenCalledWith(testCases[0].output)
  })
  
  test('rotate: should output 0,0,WEST', () => {
    game.run(testCases[1].commands)
    expect(spy).toHaveBeenCalledWith(testCases[1].output)
  })
  
  test('move and rotate: should output 1,2,EAST', () => {
    game.run(testCases[2].commands)
    expect(spy).toHaveBeenCalledWith(testCases[2].output)
  })
  
  test('multiple place: should output 1,1,NORTH', () => {
    game.run(testCases[3].commands)
    expect(spy).toHaveBeenCalledWith(testCases[3].output)
  })
  
  test('invalid command: should output 0,0,NORTH', () => {
    game.run(testCases[4].commands)
    expect(spy).toHaveBeenCalledWith(testCases[4].output)
  })
  
  test('invalid move: should output 0,0,SOUTH', () => {
    game.run(testCases[5].commands)
    expect(spy).toHaveBeenCalledWith(testCases[5].output)
  })
  
  test('invalid place: should output 1,1,NORTH', () => {
    game.run(testCases[6].commands)
    expect(spy).toHaveBeenCalledWith(testCases[6].output)
  })
  
  test('not start until place: should output 1,1,NORTH', () => {
    game.run(testCases[7].commands)
    expect(spy).toHaveBeenCalledWith(testCases[7].output)
  })
})