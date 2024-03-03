'use client';
import React, { ReactNode } from 'react';
import MUIContainer from '@mui/material/Container';

interface ContainerProps {
	children: ReactNode;
}

// custom container could be shared for different layouts
const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<MUIContainer
			maxWidth="md"
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			{children}
		</MUIContainer>
	);
};

export default Container;
