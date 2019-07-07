import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'lightgrey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecorationLine: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.probTypes = {
    todos: PropTypes.array.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
// const itemStyle = {
//     backgroundColor: 'lightgrey'
// }
export default TodoItem;
