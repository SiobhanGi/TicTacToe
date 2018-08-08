# Tic Tac Toe

A command line app that simulates a game of 3x3 2 player Tic Tac Toe. Written to practice JS ES6, TDD, code optimisation and code quality( including SRP and encapsulation).

## My approach

Initially created the user stories for the application, then using that data constructed a diagram which showed the classes, functions and states.

Wrote the app with ES6 including classes and kept to a soft core time limit of 2 days to see how much I could get done.

Tried to limit my thinking to only writing the logic, and not a full app with a UI. As a practice is segmentation. My plan is to use this logic in a 2nd gen version of Tic Tac Toe to create a UI and a computer opponent.

I used node package manager and decided to use a familiar testing framework Jasmine to get more comfortable with spies and mocking.

This app was completely TDD.
<br>

## Technologies

* Javascript ES6
* Node
* Jasmine-node and Karma
* Karma for code coverage
* Eslint

## Getting started

```javascript
git clone
```
<br>

## Interaction

To start, copy path of index.html and paste the URL in to your browser.

Open console via google developer tools and use the following commands to interact with the app.

### The board

1  | 2 | 3
---|---|---
4  | 5 | 6
7  | 8 | 9
<br>

### Commands

#### New game

```javascript
game = new Game();
```

Player 1 starts first, will switch to player 2 if player 1's move is legal.
</br>

#### Move

```javascript
game.move(position_to_move_to)
```
<br>

## Tests
#### To run tests in command line

```
npm test start
```
Achieved over 95% test coverage.
