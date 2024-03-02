'use client';
import React, { useState } from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TaskItem from '@/components/TaskItem';
import { SelectChangeEvent } from '@mui/material/Select';
import { Task } from '@/lib/types';
import { TASKS_LIST_FALLBACK } from './constants';

interface TaskListProps {
	tasks: Task[];
	onDelete: (id: string) => void;
	onEdit: (id: string, newText: string) => void;
	onToggleCompletion: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit, onToggleCompletion }) => {
	const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

	const handleChange = (event: SelectChangeEvent) => {
		setFilter(event.target.value as 'all' | 'completed' | 'active');
	};

	return (
		<Paper elevation={3} style={{ padding: '16px' }}>
			<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
				<InputLabel id="filter-by">Filter by</InputLabel>
				<Select labelId="filter-by" id="filter-by" value={filter} label="Filter by" onChange={handleChange}>
					<MenuItem value="all">All</MenuItem>
					<MenuItem value="completed">Completed</MenuItem>
					<MenuItem value="active">Active</MenuItem>
				</Select>
			</FormControl>
			<List>
				{tasks.length ? (
					tasks.map((task) => {
						return (task.completed && filter === 'completed') || filter === 'all' || (!task.completed && filter === 'active') ? <TaskItem key={task.id} task={task} onDelete={() => onDelete(task.id)} onEdit={(newText) => onEdit(task.id, newText)} onToggleCompletion={() => onToggleCompletion(task.id)} /> : null;
					})
				) : (
					<Typography variant="body1" gutterBottom>
						{TASKS_LIST_FALLBACK}
					</Typography>
				)}
			</List>
		</Paper>
	);
};

export default TaskList;
