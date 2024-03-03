'use client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

interface TaskFormProps {
	onSubmit: (text: string) => void;
	btnText: string;
	currentText?: string | undefined;
}

// TaskForm is a shared form that could be used for multiple actions, based on the passed onSubmit handler
const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, btnText, currentText }) => {
	const [text, setText] = useState(currentText || '');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (text.trim() !== '') {
			onSubmit(text.trim());
			setText('');
		}
	};

	return (
		<Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={9}>
						<TextField fullWidth label="Task" variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
					</Grid>
					<Grid item xs={3}>
						<Button variant="contained" type="submit" fullWidth>
							{btnText}
						</Button>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
};

export default TaskForm;
