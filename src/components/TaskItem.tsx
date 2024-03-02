"use client";
import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "../theme";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
  onEdit: (newText: string) => void;
  onToggleCompletion: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete,
  onEdit,
  onToggleCompletion,
}) => {
  const { theme } = useTheme();

  return (
    <ListItem
      style={{
        borderRadius: "4px",
        marginBottom: "8px",
        border: 'solid grey 1px'
      }}
    >
      <ListItemText
        primary={task.text}
        sx={{ textDecoration: task.completed ? "line-through" : "none" }}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={onToggleCompletion}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          onClick={() => onEdit(prompt("Edit task:", task.text) || "")}
        >
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
