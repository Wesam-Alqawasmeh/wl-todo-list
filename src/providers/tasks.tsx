'use client';
import React, { Reducer, Dispatch, createContext, ReactNode, useReducer } from 'react';
import { Task } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

interface TasksActionType {
	payload: { task: Task };
	type: string;
}

const tasksReducer: Reducer<Task[], TasksActionType> = (tasks: Task[], action: TasksActionType) => {
	switch (action.type) {
		case 'added': {
			return [...tasks, { id: uuidv4(), text: action?.payload?.task?.text, completed: false }];
		}
		case 'group-added': {
			return [...tasks, ...(Array.isArray(action?.payload?.task) ? (action?.payload?.task as Task[]) : [])];
		}
		case 'changed': {
			return tasks.map((task) => (task.id === action?.payload?.task?.id ? action?.payload?.task : task));
		}
		case 'deleted': {
			return tasks?.filter?.(({ id }) => id !== action?.payload?.task?.id);
		}
		default: {
			return tasks;
		}
	}
};

type TasksDispatch = Dispatch<TasksActionType>;

export const TasksDispatchContext = createContext<TasksDispatch>(() => {});
export const TasksContext = createContext([] as Task[]);

interface TasksProviderProps {
	children: ReactNode;
}

const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);
	return (
		<TasksContext.Provider value={tasks}>
			<TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
		</TasksContext.Provider>
	);
};

export default TasksProvider;
