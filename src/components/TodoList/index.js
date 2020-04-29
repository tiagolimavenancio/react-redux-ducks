import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../store/actions/todos";

import './styles.css';

function TodoList(props) {
    const { todos, toggleTodo, removeTodo } = props;

    function handleSubmit = e => {
        e.preventDefault();

        props.addTodo(input.value);

        input.value = '';
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input ref={el => input = e} />
                <button type="submit">Novo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.complete ? <s>{todo.text}</s> : todo.text}
                        <div>
                            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                            <button onClick={() => removeTodo(todo.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);