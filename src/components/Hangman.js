import React, { Component } from 'react';
import { randomTeam } from './Words.js'

import step0 from "./images/zero.jpg";
import step1 from "./images/one.jpg";
import step2 from "./images/two.jpg";
import step3 from "./images/three.jpg";
import step4 from "./images/four.jpg";
import step5 from "./images/five.jpg";
import step6 from "./images/six.jpg";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomTeam()
    }
  }

  handleGuess = g => {
    let letter = g.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : "_"));
  }


  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      < button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button >
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomTeam()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!"
    }
    if (gameOver) {
      gameStat = "You Lost!!!"
    }

    return (
      <div className="Hangman container">
        {/* <h1 className='text-center'>Hangman</h1> */}
        <div className='float-right'>Wrong Guess: {this.state.mistake} of {this.props.maxIncorrect}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt="" />
        </div>
        <div className="text-center">
          <p>Guess the NBA team!</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <button className='btn btn-info' onClick={this.resetButton}>Reset</button>
        </div>
      </div >
    )
  }
}

export default Hangman;