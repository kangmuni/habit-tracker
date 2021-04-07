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

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits]; // 새로운 배열
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits }); // 키와 밸류가 동일한 이름인 경우 생략 가능
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecreament={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
