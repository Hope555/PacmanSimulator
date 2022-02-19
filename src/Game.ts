import Grid from "./Grid";
import Pacman from "./Pacman";
import { faceDirectionType } from '../src/types'

class Game {
  private grid: Grid
  private pacman: Pacman
  private isGameStart: boolean

  constructor() {
    this.grid = new Grid(5, 5);
    this.pacman = new Pacman();
    this.isGameStart = false;
  }

  run = (commands: string[]) => {
    for (const command of commands) {
      if (this.isGameStart) {
        if (command === 'MOVE') { // move
          const pacmanState = this.pacman.tryMove();
          if (this.grid.validatePacmanState(pacmanState)) {
            this.pacman.move()
          }
        } else if (this.isValidPlaceCommand(command)) { // place
          const placeData = this.tryPlacePacman(command)
          if (placeData) {
            this.pacman.place(placeData)
          }
        } else if (command === 'LEFT' || command === 'RIGHT') { // rotate
          this.pacman.rotate(command)
        } else if (command === 'REPORT') { // report
          const pacmanState = this.pacman.getState()
          console.log(`${pacmanState.coordinateX},${pacmanState.coordinateY},${pacmanState.faceDirection}`)
        } else {
          console.error('Invalid command: ', command)
        }
      } else {
        if (this.isValidPlaceCommand(command)) {
          const placeData = this.tryPlacePacman(command)
          if (placeData) {
            this.pacman.place(placeData)
            this.isGameStart = true;
          }
        }
      }
    }
  }

  private isValidPlaceCommand = (command: string) => {
    const regex = /^PLACE \d+,\d+,(EAST|WEST|NORTH|SOUTH)$/;
    return regex.test(command)
  }

  private tryPlacePacman = (command: string) => {
    const placeData = this.getPlaceData(command);
    const pacmanState = this.pacman.tryPlace(placeData);
    if (this.grid.validatePacmanState(pacmanState)) {
      return pacmanState
    } else {
      return null;
    }
  }

  private getPlaceData = (command: string) => {
    const placeDataArray = command.slice(6).split(',');
    return {
      coordinateX: Number(placeDataArray[0]),
      coordinateY: Number(placeDataArray[1]),
      faceDirection: placeDataArray[2] as faceDirectionType,
    }
  }
}

export default Game