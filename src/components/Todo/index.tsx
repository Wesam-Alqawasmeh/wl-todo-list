'use client';
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import TodoHeader from '@/components/TodoHeader';
import { useTheme, useDispatch, useTasks } from '@/lib/hooks';

// "Todo" is the main component, it wraps all of the todo pieces
const Todo: React.FC = () => {
	const tasks = useTasks();
	const dispatch = useDispatch();

	const { theme } = useTheme();

	// load tasks from localStorage on component mount
	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks');
		if (storedTasks) {
			dispatch({ type: 'group-added', payload: { task: JSON.parse(storedTasks) } });
		}
	}, []);

	// update the localStorage whenever the tasks are updated
	useEffect(() => {
		if (tasks.length) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		} else {
			localStorage.removeItem('tasks');
		}
	}, [tasks]);

	// add task handler
	const addTask = (text: string) => {
		dispatch({ type: 'added', payload: { task: { text, id: '', completed: false } } });
	};

	return (
		<Box
			boxShadow={3}
			p={4}
			style={{
				backgroundColor: theme?.palette?.mode === 'light' ? '#fff' : '#000',
				borderRadius: '8px',
			}}
		>
			<TodoHeader />
			<TaskForm onSubmit={addTask} btnText={'Add Task'} />
			<TaskList tasks={tasks} />
		</Box>
	);
};

export default Todo;
