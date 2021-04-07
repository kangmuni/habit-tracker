import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: '독서', count: 0 },
      { id: 2, name: '러닝', count: 0 },
      { id: 3, name: '코딩', count: 0 },
    ],
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit key={habit.id} habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;
