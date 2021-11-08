import React, { Component } from 'react';

class HabitInput extends Component {
  // ref 생성
  // 바로 DOM 요소에 접근하지 않고 값을 가져올 때 등 ref를 사용한다.
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-input" placeholder="please enter your habit"/>
        <button className="add-button">Enter</button>
      </form>
    );
  }
}

export default HabitInput;