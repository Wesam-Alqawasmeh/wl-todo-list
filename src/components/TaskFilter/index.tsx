'use client';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { INPUT_LABEL_TEXT, MENU_ITEMS } from './contants';

interface TaskListProps {
	filter: string;
	setFilter: (arg0: 'all' | 'completed' | 'active') => void;
}

const TaskFilter: React.FC<TaskListProps> = ({ filter, setFilter }) => {
	const handleChange = (event: SelectChangeEvent) => {
		setFilter(event.target.value as 'all' | 'completed' | 'active');
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<InputLabel id="filter-by">{INPUT_LABEL_TEXT}</InputLabel>
			<Select labelId="filter-by" id="filter-by" value={filter} label="Filter by" onChange={handleChange}>
				{MENU_ITEMS.map((item) => (
					<MenuItem key={item} value={item.toLowerCase()}>
						{item}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default TaskFilter;
