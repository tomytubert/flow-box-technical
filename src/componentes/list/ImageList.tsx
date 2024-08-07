import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Images } from '../../interfaces/types'
import FavoriteIcon from '@mui/icons-material/Favorite'

interface Props {
	posts: Images[]
}

interface CardProps {
	image: string
	altImage: string
	likes: number
}

export const ImageList = ({ posts }: Props) => {
	return (
		<Box gap={2} display='flex' flexDirection='column'>
			{posts.map((post) => {
				return (
					<CardList
						key={post.id}
						image={post.urls.full}
						altImage={post.alt_description}
						likes={post.likes}
					/>
				)
			})}
		</Box>
	)
}

const CardList = ({ image, altImage, likes }: CardProps) => {
	return (
		<Card sx={{ display: 'flex' }}>
			<CardMedia
				component='img'
				height='194'
				width='200'
				image={image}
				alt={altImage}
				loading='lazy'
				sx={{flex: {md: 2}, width: '200px', minWidth:'200px',  }}
			/>
			<CardContent sx={{ height: {md: '120px'}, flex: {md: 2} }}>
				<Box display='flex' alignItems='center' gap={2} mb={1}>
					<FavoriteIcon color='primary'/>
					<Typography variant='body2' color='text.secondary'>
						{likes}
					</Typography>
				</Box>
				<Typography variant='body2' color='text.secondary' className="capitalize-first-letter">
					{altImage}
				</Typography>
			</CardContent>
		</Card>
	)
}
