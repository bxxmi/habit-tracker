import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

// ๐ ์ ์ฒด์ ์ธ ๋ฐ์ดํฐ๊ฐ ๋ค์ด์๋ ์ปดํฌ๋ํธ๋ ํด๋น ๋ฐ์ดํฐ๋ฅผ ์กฐ์ํ๋ ๋ก์ง์ ์์ฑํ๊ธฐ์ ์๋ง๋ค. 
class App extends Component {
  // ๐ App ์ปดํฌ๋ํธ์ state๋ฅผ ์ง์ ํ๋ ์ด์ 
  // ์น ํ์ด์ง์ ๋์์ ๋ณด์! ๋จผ์ , habit์ ์ค์ ํ๊ณ  ๋๋ฉด ๋งจ ์์ navbar์ ์ซ์๊ฐ ์ฆ๊ฐํ๋ค.
  // ์ฆ, ๋ชจ๋  ์ปดํฌ๋ํธ์์ ๋ค ์ฐ์ด๊ณ  ์๋ ๋ฐ์ดํฐ๋ผ๋ ๋ป์ด๋ค. ๋๋ฌธ์ ๋ ๋์ ์์ ์ปดํฌ๋ํธ์ 
  // state๋ฅผ ์ง์ ํด์ผ ํ๊ธฐ ๋๋ฌธ์ app ์ปดํฌ๋ํธ์ state๋ฅผ ์ค์ ํ๋ ๊ฒ์ด๋ค.
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0}
    ],
  };

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      // ๊ธฐ์กด ๋ฐฐ์ด์ ์๋ id๊ฐ๊ณผ ์๋ฐ์ดํธ ํ  id ๊ฐ์ด ๊ฐ๋ค๋ฉด
      if (item.id === habit.id) {
        // ๊ทธ๊ฒ๋ค์ ์๋ก์ด ๋ฐฐ์ด๋ก ๋ง๋ค๋ ๊ธฐ์กด count ๋ณ์์ 1์ด ์ฆ๊ฐํ๋ ๊ฐ๋ค๋ก ๋ง๋ค ๊ฒ์ด๋ค.
        return { ...habit, count: habit.count + 1 };
      }
      // ๊ทธ๋ ์ง ์๋ค๋ฉด(= ์๋ฐ์ดํธ ํ์ง ์๋๋ค๋ฉด) ๊ทธ๋ฅ item ๊ทธ๋๋ก ์ด๋ค.
      return item; 
    });
    this.setState({habits});
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
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
    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
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
