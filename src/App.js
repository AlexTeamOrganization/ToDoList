import React, {useState} from 'react';
import Template from './components/Template'
import TodoList from './components/TodoList'
import './App.css'

function App() {
	const [todo, setTodo] = useState('');
	const [todoLists, setTodoLists] = useState([]);
	const handleChange = event => {
		setTodo(event.target.value)
	};
	
	const onCheckEnter = event => {
		if (event.key === 'Enter') {
			if (!todo.trim()) {
				console.log('내용을 입력해주세요');
				return;
			}
			onRegisterTodo();
		}
	}
	
	const onRegisterTodo = () => {
		const newTodo = {
			id: todoLists.length,
			text: todo,
			checked: false
		}
		setTodoLists(todoLists.concat(newTodo));
		console.log(todo + ' 를 정상적으로 등록하였습니다')
		setTodo('')
	}
	const switchChecked = id => {
		setTodoLists(todoLists.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
	}
	
	const removeTodo = id => {
		const todos = todoLists.filter(todo => todo.id !== id)
		todos.sort();
		setTodoLists(todos);
	}
	console.log(todoLists)
	
	
	return (
		<Template>
			<div className='body-back'>
				<h1 className='title'>What should you do?</h1>
				<input
					autoComplete='off'
					name='todo'
					className='item'
					type='text'
					value={todo}
					placeholder='Write what you need to do and Press Enter key!'
					onChange={handleChange}
					onKeyUp={onCheckEnter}
				/>
			</div>
			<div className='box'>
				<TodoList switchChecked={switchChecked} removeTodo={removeTodo} todoLists={todoLists}></TodoList>
			</div>
		</Template>
	);
}

export default App;