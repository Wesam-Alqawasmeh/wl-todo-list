import React from 'react';
import Todo from '@/components/Todo';
import { ThemeProviderWrapper } from '@/providers/theme';
import TasksProvider from '@/providers/tasks';

const TodoListPage: React.FC = () => {
	return (
		<TasksProvider>
			<ThemeProviderWrapper>
				<Todo />
			</ThemeProviderWrapper>
		</TasksProvider>
	);
};

export default TodoListPage;
