/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
                        this.props.todos.map((todo) => (
                          <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps={this.props.deleteTodoProps}
                            setUpdate={this.props.setUpdate}
                          />
                        ))
                    }
        </ul>
      </div>
    );
  }
}

export default TodoList;
