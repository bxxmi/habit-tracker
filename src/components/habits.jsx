import React, { Component } from 'react';
import Habit from './habit';
import HabitInput from './habitInput';

// 여러 개의 li 즉, habit 컴포넌트를 관리하는 ul 컴포넌트이다.
class Habits extends Component {

  handleAdd = name => {
    this.props.onAdd(name);
  }

  render() {
    return (
      <>
      <HabitInput onAdd={this.handleAdd}/>
        <ul>
          {
            this.props.habits.map(habit => (
              <Habit
                // 자식 컴포넌트가 존재한다면 key 설정이 필수이다.
                key = {habit.id}
                // habit이라는 이름을 가진 props에 habit 데이터를 하나씩 담아서
                // 하위 컴포넌트에 담아줌
                habit = {habit}
                onIncrement = {this.props.onIncrement}
                onDecrement = {this.props.onDecrement}
                onDelete = {this.props.onDelete}
              />
            ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;

