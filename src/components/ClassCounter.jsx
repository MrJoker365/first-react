
import React, { Component } from 'react'

// застарілий спосіб
export default class ClassCounter extends Component { // тут без лишніх слів, просто щоб знати як створювати класовий компонент

    constructor(props) { // в класовому компоненті хуки використовувати неможливо
        super(props);
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this); // якщо не зробити bind, буде вискакувати помилка
        this.decrement = this.decrement.bind(this);
    }

    increment() { // так як це пишетбся в класі, слово function непотрібне
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

  render() {
    return (
        <div>

            <h1>{this.state.count}</h1>

            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>

        </div>
    )
  }
}


