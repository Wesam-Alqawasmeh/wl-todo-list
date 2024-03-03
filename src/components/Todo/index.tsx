'use client';
import React, { useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import TodoHeader from '@/components/TodoHeader';
import { useTheme } from '@/lib/hooks';
import { TasksContext, TasksDispatchContext } from '@/providers/tasks';

// the main component, it wraps all of the todo pieces
const Todo: React.FC = () => {
	const tasks = useContext(TasksContext);
	const dispatch = useContext(TasksDispatchContext);

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
		<Container
			maxWidth="md"
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
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
		</Container>
	);
};

export default Todo;
