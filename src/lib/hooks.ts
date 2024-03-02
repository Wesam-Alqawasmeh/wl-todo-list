import { useContext } from 'react';
import { ThemeContext } from '@/providers/theme';

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProviderWrapper');
	}
	return context;
};
