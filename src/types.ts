export type faceDirectionType = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

export type rotateDirectionType = 'LEFT' | 'RIGHT';

export interface IPacmanState {
  coordinateX: number,
  coordinateY: number,
  faceDirection: faceDirectionType,
}