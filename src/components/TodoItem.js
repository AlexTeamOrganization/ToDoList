import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdDelete} from 'react-icons/md';

const TodoItem = ({switchChecked, removeTodo, todo}) => {
	const {id, text, checked} = todo;
	
	return <div className='TodoItem'>
		<div className='content'>
			{checked ? <MdCheckBox onClick={() => {
				switchChecked(id);
			}}/> : <MdCheckBoxOutlineBlank onClick={() => {
				switchChecked(id);
			}}/>}
		</div>
		<div className='content'>
			<MdDelete onClick={() => {
				removeTodo(id);
			}}/>
		</div>
		{checked ? <span className='line text'>&nbsp;{text}</span> : <span className='text'>&nbsp;{text}</span>}
	</div>
}

export default TodoItem;