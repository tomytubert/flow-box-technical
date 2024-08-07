import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Inter from './assets/fonts/Inter-VariableFont_opsz-wght.ttf'
import { TopBar } from './componentes/ui/topbar/TopBar.tsx'
import { PostsContextProvider } from './store/postContext.tsx'

const theme = createTheme({
	typography: {
		fontFamily: ['Inter'].join(','),
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
