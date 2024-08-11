import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PropTypes from 'prop-types'

interface Props {
	image: string
	altImage: string
	avatarImage: string
	avatarName: string
	likes: number
}
export const CardPost = ({
	image,
	avatarImage,
	avatarName,
	altImage,
	likes,
}: Props) => {
	return (
		<Card sx={{ width: 345 }}>
			<CardHeader
				avatar={<Avatar aria-label='recipe' src={avatarImage} />}
				title={`@${avatarName}`}
			/>
			<CardMedia
				component='img'
				height='194'
				image={image}
				alt={altImage}
				loading='lazy'
			/>
			<CardContent sx={{ height: '120px' }}>
				<Box display='flex' alignItems='center' gap={2} mb={1}>
					<FavoriteIcon color='primary' />
					<Typography variant='body2' color='text.secondary'>
						{likes}
					</Typography>
				</Box>
				<Typography
					variant='body2'
					color='text.secondary'
					className='capitalize-first-letter'
				>
					{altImage}
				</Typography>
			</CardContent>
		</Card>
	)
}

CardPost.propTypes = {
	image: PropTypes.string.isRequired,
	avatarImage: PropTypes.string.isRequired,
	avatarName: PropTypes.string.isRequired,
	altImage: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
}
