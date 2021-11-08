import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

// 📌 전체적인 데이터가 들어있는 컴포넌트는 해당 데이터를 조작하는 로직을 작성하기에 알맞다. 
class App extends Component {
  // 📌 App 컴포넌트에 state를 지정하는 이유
  // 웹 페이지의 동작을 보자! 먼저, habit을 설정하고 나면 맨 위의 navbar에 숫자가 증가한다.
  // 즉, 모든 컴포넌트에서 다 쓰이고 있는 데이터라는 뜻이다. 때문에 더 높은 상위 컴포넌트에 
  // state를 지정해야 하기 때문에 app 컴포넌트에 state를 설정하는 것이다.
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0}
    ],
  };

  handleIncrement = habit => {
    const habits = [...this.state.habits]; 
    const index = habits.indexOf(habit);
    habits[index].count++;

    this.setState({habits: habits});
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits]; 
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;

    this.setState({habits});
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0}];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({habits});
  };

  render() {
    return (
      <>
        <Navbar totalCount = {this.state.habits.filter(item => item.count > 0).length} />
        <Habits 
          habits = {this.state.habits}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}
          onAdd = {this.handleAdd}
          onReset = {this.handleReset}
        />
      </>
    ); 
  }
}

export default App;
