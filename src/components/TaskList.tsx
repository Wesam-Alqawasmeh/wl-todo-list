"use client";
import React, { useState } from "react";
import { List, Paper, Typography, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  onToggleCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDelete,
  onEdit,
  onToggleCompletion,
}) => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as 'all' | 'completed' | 'active');
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="filter-by">Filter by</InputLabel>
      <Select
        labelId="filter-by"
        id="filter-by"
        value={filter}
        label="Filter by"
        onChange={handleChange}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="active">Active</MenuItem>
      </Select>
      </FormControl>
      <List>
        {tasks.length ? tasks.map((task) => {
          return (task.completed && filter === 'completed') || filter === 'all' || (!task.completed && filter === 'active') ? <TaskItem
            key={task.id}
            task={task}
            onDelete={() => onDelete(task.id)}
            onEdit={(newText) => onEdit(task.id, newText)}
            onToggleCompletion={() => onToggleCompletion(task.id)}
          /> : null
        }) :
          <Typography variant="body1" gutterBottom>
            Start managing your tasks by adding you first task
          </Typography>}
      </List>
    </Paper>
  );
};

export default TaskList;
