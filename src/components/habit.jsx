import React, { Component } from 'react';

// 부모 컴포넌트로부터 전달받은 데이터를 보여주는 컴포넌트이기에
// 자체 상태(=자체 데이터) state는 불필요하다.
class Habit extends Component {
  handleIncrement = () => {
    // 각 habit의 handleIncrement가 실행이 되면 
    // props로 받은 (= 실제 조작에 관여하는) onIncrement 함수를 사용하라는 구문이다.
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  
  render() {
    // 상위 컴포넌트인 habits에서 받아온 데이터들을 사용함.
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit;