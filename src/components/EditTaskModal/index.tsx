import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TaskForm from '@/components/TaskForm';

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
	onEdit: (newText: string) => void;
	taskId: string;
	taskText: string;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ open, onClose, onEdit, taskText }) => {
	const onSubmit = (newText: string) => {
		onEdit(newText);
		onClose();
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<TaskForm onSubmit={onSubmit} btnText="Edit Task" currentText={taskText} />
			</Box>
		</Modal>
	);
};

export default EditTaskModal;
