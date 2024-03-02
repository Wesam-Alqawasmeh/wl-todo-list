'use client';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@/lib/hooks';
import { TOGGLE_BTN_TEXT, TODO_BOX_HEADLINE } from './constants';

// holds the headline and theme toggling button
const TodoHeader: React.FC = () => {
	const { toggleTheme } = useTheme();

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				marginBottom: '20px',
			}}
		>
			<Typography variant="h3" component="h1">
				{TODO_BOX_HEADLINE}
			</Typography>
			<Button variant="outlined" onClick={toggleTheme}>
				{TOGGLE_BTN_TEXT}
			</Button>
		</div>
	);
};

export default TodoHeader;
