'use client';
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import EditTaskModal from '@/components/EditTaskModal';
import { Task } from '@/lib/types';

interface TaskItemProps {
	task: Task;
	onDelete: () => void;
	onEdit: (newText: string) => void;
	onToggleCompletion: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit, onToggleCompletion }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<ListItem
			style={{
				borderRadius: '4px',
				marginBottom: '8px',
				border: 'solid grey 1px',
			}}
		>
			<ListItemText
				primary={task.text}
				sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
			/>
			<ListItemSecondaryAction>
				<IconButton onClick={onToggleCompletion}>
					<CheckIcon {...(task.completed && { color: 'success' })} />
				</IconButton>
				<IconButton onClick={onDelete}>
					<DeleteIcon />
				</IconButton>
				<IconButton onClick={handleOpen}>
					<EditIcon />
				</IconButton>
				<EditTaskModal
					open={open}
					onClose={handleClose}
					onEdit={onEdit}
					taskId={task.id}
					taskText={task.text}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default TaskItem;
