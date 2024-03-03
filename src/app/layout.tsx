import type { Metadata } from 'next';
import { ThemeProviderWrapper } from '@/providers/theme';
import TasksProviderWrapper from '@/providers/tasks';
import Container from '@/components/Container';

export const metadata: Metadata = {
	title: 'WL Todo App',
	description: 'Todo App using Next JS, React, Typescript, and Material UI',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<TasksProviderWrapper>
			<ThemeProviderWrapper>
				<html lang="en">
					<body>
						<Container>{children}</Container>
					</body>
				</html>
			</ThemeProviderWrapper>
		</TasksProviderWrapper>
	);
}
