import React, { Component } from 'react';


class Hangman extends Component {
  static defaultProps = {
    maxIncorrect: 6,
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

}