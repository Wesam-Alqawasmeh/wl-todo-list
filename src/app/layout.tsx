import type { Metadata } from 'next';

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
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
