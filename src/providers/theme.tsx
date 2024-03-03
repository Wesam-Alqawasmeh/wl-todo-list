'use client';
import React, { createContext, ReactNode, useState, useCallback, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, Theme, CssBaseline, ThemeOptions } from '@mui/material';

interface ThemeContextProps {
	theme: ThemeOptions;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({ children }) => {
	const [themeType, setThemeType] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark') setThemeType('dark');
	}, []);

	const toggleTheme = useCallback(() => {
		setThemeType((prevTheme) => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	}, []);

	const theme: Theme = createTheme({
		palette: {
			mode: themeType,
		},
	});

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<ThemeContext.Provider value={{ theme: theme, toggleTheme }}>{children}</ThemeContext.Provider>
		</MuiThemeProvider>
	);
};
