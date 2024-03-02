'use client';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import TodoHeader from '@/components/TodoHeader';
import { useTheme } from '@/lib/hooks';
import { Task } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

// the main component, wraps all of the todo pieces
const Todo: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const { theme } = useTheme();

	// load tasks from localStorage on component mount
	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks');
		if (storedTasks) {
			setTasks(JSON.parse(storedTasks));
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
		setTasks([...tasks, { id: uuidv4(), text, completed: false }]);
	};

	// delete task handler
	const deleteTask = (id: string) => {
		setTasks(tasks?.filter?.((task) => task.id !== id));
	};

	// edit task handler
	const editTask = (id: string, newText: string) => {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							text: newText,
					  }
					: task
			)
		);
	};

	// handle task completion status
	const toggleCompletion = (id: string) => {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							completed: !task.completed,
					  }
					: task
			)
		);
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
				<TaskList
					tasks={tasks}
					onDelete={deleteTask}
					onEdit={editTask}
					onToggleCompletion={toggleCompletion}
				/>
			</Box>
		</Container>
	);
};

export default Todo;
