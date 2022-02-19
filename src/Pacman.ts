import { faceDirectionType, rotateDirectionType, IPacmanState } from '../src/types'

class Pacman {
  private coordinateX: number;
  private coordinateY: number;
  private faceDirection: faceDirectionType; 
  
  constructor() {
    this.coordinateX = 0;
    this.coordinateY = 0;
    this.faceDirection = 'NORTH';
  }
  
  tryPlace = ({coordinateX, coordinateY, faceDirection} : IPacmanState) : IPacmanState => {
    return {
      coordinateX,
      coordinateY,
      faceDirection,
    }
  }

  place = ({coordinateX, coordinateY, faceDirection} : IPacmanState) => {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.faceDirection = faceDirection;
  }

  tryMove = () : IPacmanState => {
    let currentCoordinateX = this.coordinateX;
    let currentCoordinateY = this.coordinateY;
    switch(this.faceDirection) {
      case 'EAST':
        currentCoordinateX += 1;
        break;
      case 'WEST':
        currentCoordinateX -= 1;
        break;
      case 'NORTH':
        currentCoordinateY += 1;
        break;
      case 'SOUTH':
        currentCoordinateY -= 1;
        break;
    }
    return {
      coordinateX: currentCoordinateX,
      coordinateY: currentCoordinateY,
      faceDirection: this.faceDirection,
    }
  }

  move = () => {
    const newPosition = this.tryMove()
    this.coordinateX = newPosition.coordinateX
    this.coordinateY = newPosition.coordinateY
  }

  rotate = (rotateDirection: rotateDirectionType) => {
    switch(this.faceDirection) {
      case 'EAST':
        this.faceDirection = rotateDirection === 'LEFT' ? 'NORTH' : 'SOUTH';
        break;
      case 'WEST':
        this.faceDirection = rotateDirection === 'LEFT' ? 'SOUTH' : 'NORTH';
        break;
      case 'NORTH':
        this.faceDirection = rotateDirection === 'LEFT' ? 'WEST' : 'EAST';
        break;
      case 'SOUTH':
        this.faceDirection = rotateDirection === 'LEFT' ? 'EAST' : 'WEST';
        break;
    }
  }

  getState = () => {
    return {
      coordinateX: this.coordinateX,
      coordinateY: this.coordinateY,
      faceDirection: this.faceDirection,
    }
  }
}

export default Pacman