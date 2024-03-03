import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TaskForm from '@/components/TaskForm';
import { Task } from '@/lib/types';
import { useDispatch } from '@/lib/hooks';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	width: '75%',
};

interface EditTaskModalProps {
	open: boolean;
	onClose: () => void;
	task: Task;
}

// EditTaskModal renders the edit form modal, and holds the updating task functionality
const EditTaskModal: React.FC<EditTaskModalProps> = ({ open, onClose, task }) => {
	const dispatch = useDispatch();

	// edit task handler
	const onSubmit = (newText: string) => {
		dispatch({
			type: 'changed',
			payload: {
				task: { ...task, text: newText },
			},
		});
		// close the modal after updating the task
		onClose();
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<TaskForm onSubmit={onSubmit} btnText="Edit Task" currentText={task?.text} />
			</Box>
		</Modal>
	);
};

export default EditTaskModal;
