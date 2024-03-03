'use client';
import Typography from '@mui/material/Typography';

/**
 * fallback will be displayed on errors throwing.
 */
export default function Error() {
	return (
		<Typography variant="h3" color="error">
			An error occurred! Try again later please!
		</Typography>
	);
}
