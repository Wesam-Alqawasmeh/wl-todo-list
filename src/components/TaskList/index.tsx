'use client';
import React, { useState } from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TaskItem from '@/components/TaskItem';
import TaskFilter from '@/components/TaskFilter';
import { Task } from '@/lib/types';
import { TASKS_LIST_FALLBACK } from './constants';

interface TaskListProps {
	tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
	const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

	return (
		<Paper elevation={3} style={{ padding: '16px' }}>
			<TaskFilter filter={filter} setFilter={setFilter} />
			<List>
				{tasks.length ? (
					tasks?.filter?.((task) => filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'active' && !task.completed))?.map?.((task) => <TaskItem key={task.id} task={task} />)
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
