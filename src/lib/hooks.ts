import { useContext } from 'react';
import { ThemeContext } from '@/providers/theme';
import { TasksContext, TasksDispatchContext } from '@/providers/tasks';

// get the current theme from ThemeContext
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProviderWrapper');
	}
	return context;
};

// get the dispatch function from TasksDispatchContext
export const useDispatch = () => {
	const dispatch = useContext(TasksDispatchContext);
	if (!dispatch) {
		throw new Error('useDispatch must be used within a TasksProviderWrapper');
	}
	return dispatch;
};

// get the tasks array from TasksContext
export const useTasks = () => {
	const tasks = useContext(TasksContext);
	if (!tasks) {
		throw new Error('useTasks must be used within a TasksProviderWrapper');
	}
	return tasks;
};
