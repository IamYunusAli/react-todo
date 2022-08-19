/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../App.css';

export default class InputTodo extends Component {
    state={
      title: '',
    };

    onChange=(e) => {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
      );
    }

    handleSubmit =(e) => {
      e.preventDefault();
      if (this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
        this.setState({
          title: '',
        });
      }
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            className="input-text"
            placeholder="Add todo"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <button type="button" className="input-submit">Submit</button>
        </form>
      );
    }
}
