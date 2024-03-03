'use client';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

/**
 * fallback will be displayed on errors throwing.
 */
export default function Error({ error }: { error: Error }) {
	// log error message
	useEffect(() => {
		console.error('Error: ', error);
	}, [error]);

	return (
		<Typography variant="h3" color="error">
			An error occurred! Try again later please!
		</Typography>
	);
}
