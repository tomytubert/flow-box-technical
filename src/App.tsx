import './App.css'
import {
	AppBar,
	Box,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from '@mui/material'
import { usePosts } from './store/postContext'
import { CardGrid } from './componentes/card-grid/CardGrid'
import { useState } from 'react'
import { Carousel } from './componentes/carousel/Carousel'
import { ImageGrid } from './componentes/grid/ImageGrid'

const views = {
	carousel: 'CAROUSEL',
	card: 'CARD',
	grid: 'GRID',
	list: 'LIST',
}

function App() {
	const { data, loading, error } = usePosts()
	const [selectedView, setSelectedView] = useState(views.grid)

	if (loading) return <p>Loading...</p>
	if (error || !data) return <p>Error</p>

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
					gap={4}
				>
					<Typography variant='h6'>Your audience content</Typography>
					<FormControl size='small' sx={{ minWidth: 120 }}>
						<InputLabel id='demo-simple-select-label'>View</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={selectedView}
							label='View'
							onChange={handleChange}
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
				{selectedView === views.carousel && <Carousel posts={data.results} />}
				{selectedView === views.card && <CardGrid posts={data.results} />}
				{selectedView === views.grid && <ImageGrid posts={data.results} />}
				{selectedView === views.list && <p>List</p>}
			</Container>
		</>
	)
}

export default App
