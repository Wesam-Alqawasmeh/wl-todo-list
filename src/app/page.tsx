import React from 'react';
import Todo from '@/components/Todo';
import { ThemeProviderWrapper } from '@/providers/theme';

const TodoListPage: React.FC = () => {
	return (
		<ThemeProviderWrapper>
			<Todo />
		</ThemeProviderWrapper>
	);
};

export default TodoListPage;
