# Pacman Simulator

A simple pacman simulator in TypeScript.

## Installation

```
git clone https://github.com/Hope555/PacmanSimulator.git
cd PacmanSimulator
npm install
```

## Run test cases

```
npm run test
```

## Usage

```typescript
import Game from "./src/Game";
const game = new Game();
const commands = [
  'PLACE 0,0,NORTH',
  'MOVE',
  'REPORT',
]
game.run(commands)
```

