import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Inter from './assets/fonts/Inter-VariableFont_opsz-wght.ttf'
import { TopBar } from './components/ui/topbar/TopBar.tsx'
import { PostsContextProvider } from './store/postContext.tsx'

const theme = createTheme({
	typography: {
		fontFamily: ['Inter'].join(','),
	},
	palette: {
		primary: {
			main: '#7F3DF3',
			light: '#9863F5',
			dark: '#582AAA',
			contrastText: '#fff',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${Inter}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: '#fff',
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#582AAA',
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: '#582AAA',
					},
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				icon: {
					color: '#582AAA', // Change this to your desired color
				},
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					'&.MuiSelect-icon': {
						color: '#fff', // Change this to your desired color
					},
				},
			},
		},
		MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '16px', // Custom border radius
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Custom box shadow
                },
            },
        },
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PostsContextProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<TopBar />
				<App />
			</ThemeProvider>
		</PostsContextProvider>
	</React.StrictMode>
)
