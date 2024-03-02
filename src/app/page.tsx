"use client";
import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import { useTheme } from "../theme";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoListPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks") || '';

    // Save tasks to localStorage whenever tasks change
    if (tasks.length) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    if (!storedTasks) return;

    if (tasks.length < JSON.parse(storedTasks)?.length) {
      if (tasks.length === 0) {
        localStorage.removeItem("tasks")
      } else {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    }
  }, [tasks]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, newText: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
            ...task,
            text: newText,
          }
          : task
      )
    );
  };

  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
            ...task,
            completed: !task.completed,
          }
          : task
      )
    );
  };

  return (
    <Container
      maxWidth="md"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        boxShadow={3}
        p={4}
        style={{
          backgroundColor: theme?.palette?.mode === "light" ? "#fff" : "#000",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h3" component="h1">
            Todo List
          </Typography>
          <Button variant="outlined" onClick={toggleTheme}>
            Toggle Theme
          </Button>
        </div>
        <TaskForm onSubmit={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onEdit={editTask}
          onToggleCompletion={toggleCompletion}
        />
      </Box>
    </Container>
  );
};

export default TodoListPage;
