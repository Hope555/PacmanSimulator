import { IPacmanState } from '../src/types'

class Grid {
  private lengthX: number = 0;
  private lengthY: number = 0;

  constructor(lengthX: number, lengthY: number) {
    if (lengthX > 0 && lengthY > 0) {
      this.lengthX = lengthX
      this.lengthY = lengthY
    } else {
      throw new Error('Invalid length')
    }
  }

  validatePacmanState({coordinateX, coordinateY, faceDirection}: IPacmanState) {
    return coordinateX >= 0
      && coordinateX < this.lengthX
      && coordinateY >= 0
      && coordinateY < this.lengthY
  }
}

export default Grid