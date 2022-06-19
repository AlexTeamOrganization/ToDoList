import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({switchChecked, removeTodo, todoLists}) => {
	return <div>
		{todoLists.map((todo) => (
			<TodoItem switchChecked={switchChecked} removeTodo={removeTodo}  key={Math.random() * 100000} todo={todo}></TodoItem>
		))}
	</div>
}
export default TodoList;