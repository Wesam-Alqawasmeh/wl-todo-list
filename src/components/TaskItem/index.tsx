'use client';
import React, { useState, useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import EditTaskModal from '@/components/EditTaskModal';
import { TasksDispatchContext } from '@/providers/tasks';
import { Task } from '@/lib/types';

interface TaskItemProps {
	task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
	const [open, setOpen] = useState(false);
	const dispatch = useContext(TasksDispatchContext);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// delete task handler
	const deleteTask = () => {
		dispatch({
			type: 'deleted',
			payload: {
				task: task,
			},
		});
	};

	// handle task completion status
	const handleToggleCompletion = () => {
		dispatch({
			type: 'changed',
			payload: {
				task: { ...task, completed: !task.completed },
			},
		});
	};

	return (
		<ListItem
			style={{
				borderRadius: '4px',
				marginBottom: '8px',
				border: 'solid grey 1px',
			}}
		>
			<ListItemText primary={task.text} sx={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
			<ListItemSecondaryAction>
				<IconButton onClick={handleToggleCompletion}>
					<CheckIcon {...(task.completed && { color: 'success' })} />
				</IconButton>
				<IconButton onClick={deleteTask}>
					<DeleteIcon />
				</IconButton>
				<IconButton onClick={handleOpen}>
					<EditIcon />
				</IconButton>
				<EditTaskModal open={open} onClose={handleClose} task={task} />
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default TaskItem;
