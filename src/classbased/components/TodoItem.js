/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './TodoItem.module.css';

export default class TodoItem extends React.Component {
    state = {
      editing: false,
    }

    handleEditting = () => {
      this.setState({
        editing: true,
      });
    }

    handleUpdatedDone = (event) => {
      if (event.key === 'Enter') {
        this.setState({ editing: false });
      }
    }

    render() {
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
      const viewMode = {};
      const editMode = {};
      if (this.state.editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      const { completed, id, title } = this.props.todo;
      return (
        <li className={styles.item}>
          <div onClick={this.handleEditting} style={viewMode}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => this.props.handleChangeProps(id)}
            />
            <button
              onClick={() => this.props.deleteTodoProps(id)}
            >
              Delete
            </button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
          </div>
          <input
            style={editMode}
            type="text"
            className={styles.textInput}
            value={title}
            onChange={(e) => {
              this.props.setUpdate(e.target.value, id);
            }}
            onKeyDown={this.handleUpdatedDone}
          />
        </li>
      );
    }
}
