"use client";
import React, { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";

interface TaskFormProps {
    onSubmit: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== "") {
            onSubmit(text.trim());
            setText("");
        }
    };

    return (
        <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={9}>
                        <TextField
                            fullWidth
                            label="Task"
                            variant="outlined"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" type="submit" fullWidth>
                            Add Task
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default TaskForm;
