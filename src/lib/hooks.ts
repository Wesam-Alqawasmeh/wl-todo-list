import { useContext } from 'react';
import { ThemeContext } from '@/providers/theme';
import { TasksContext, TasksDispatchContext } from '@/providers/tasks';

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProviderWrapper');
	}
	return context;
};

export const useDispatch = () => {
	const dispatch = useContext(TasksDispatchContext);
	if (!dispatch) {
		throw new Error('useDispatch must be used within a TasksProviderWrapper');
	}
	return dispatch;
};

export const useTasks = () => {
	const tasks = useContext(TasksContext);
	if (!tasks) {
		throw new Error('useTasks must be used within a TasksProviderWrapper');
	}
	return tasks;
};
