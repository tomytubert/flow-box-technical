import './App.css'
import {
	AppBar,
	Box,
	Button,
	CircularProgress,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from '@mui/material'
import { usePosts } from './store/postContext'
import { CardGrid } from './components/card-grid/CardGrid'
import { useState } from 'react'
import { Carousel } from './components/carousel/Carousel'
import { ImageGrid } from './components/grid/ImageGrid'
import { ImageList } from './components/list/ImageList'

const views = {
	carousel: 'CAROUSEL',
	card: 'CARD',
	grid: 'GRID',
	list: 'LIST',
}

export const App = () => {
	const { data, loading, error } = usePosts()
	const [selectedView, setSelectedView] = useState(views.list)

	if (loading)
		return (
			<Container
				sx={{
					minHeight: '90dvh',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
				}}
			>
				<CircularProgress color='primary' />
			</Container>
		)

	if (error || !data)
		return (
			<Container
				sx={{
					minHeight: '90dvh',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
				}}
			>
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
				>
					<Typography variant='h6'>
						No data available, please try again
					</Typography>
					<Button
						size='medium'
						variant='contained'
						sx={{ mt: 2, width: '50%' }}
						onClick={() => window.location.reload()}
					>
						Try again
					</Button>
				</Box>
			</Container>
		)

	const handleChange = (e: SelectChangeEvent) => {
		setSelectedView(e.target.value)
	}

	return (
		<>
			<AppBar position='static' sx={{ p: 2, backgroundColor: 'primary.light' }}>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					gap={2}
				>
					<Typography variant='h6'>Your audience content</Typography>
					<FormControl size='small' sx={{ minWidth: 120 }}>
						<InputLabel
							id='demo-simple-select-label'
							sx={{ color: 'common.white' }}
						>
							View
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={selectedView}
							label='View'
							onChange={handleChange}
							sx={{ borderRadius: '16px', color: 'common.white' }}
						>
							<MenuItem value={views.carousel}>Carousel</MenuItem>
							<MenuItem value={views.card}>Card</MenuItem>
							<MenuItem value={views.grid}>Grid</MenuItem>
							<MenuItem value={views.list}>List</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</AppBar>
			<Container
				maxWidth='md'
				sx={{ marginTop: '2rem', display: 'flex', placeContent: 'center' }}
			>
				{selectedView === views.carousel && (
					<Carousel className='fade-in' posts={data.results} />
				)}
				{selectedView === views.card && (
					<CardGrid className='fade-in' posts={data.results} />
				)}
				{selectedView === views.grid && (
					<ImageGrid className='fade-in' posts={data.results} />
				)}
				{selectedView === views.list && (
					<ImageList className='fade-in' posts={data.results} />
				)}
			</Container>
		</>
	)
}

export default App
