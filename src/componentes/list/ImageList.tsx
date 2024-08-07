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
		<Box gap={2} display="flex" flexDirection="column">
			{posts.map((post) => {
				return (
					<CardList
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
				image={image}
				alt={altImage}
				sx={{ width: '200px', flex:'2' }}
				loading='lazy'
			/>
			<CardContent sx={{ height: '120px',flex:'3' }}>
				<Box display='flex' alignItems='center' gap={2} mb={1}>
					<FavoriteIcon />
					<Typography variant='body2' color='text.secondary'>
						{likes}
					</Typography>
				</Box>
				<Typography variant='body2' color='text.secondary'>
					{altImage}
				</Typography>
			</CardContent>
		</Card>
	)
}
