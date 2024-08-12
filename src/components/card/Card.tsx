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

interface CardPostProps {
	image: string
	altImage: string
	avatarImage: string
	avatarName: string
	likes: number
	isRowDisplay?: boolean
}
export const CardPost = ({
	image,
	avatarImage,
	avatarName,
	altImage,
	likes,
	isRowDisplay,
}: CardPostProps) => {
	return (
		<Card
			sx={{
				width: isRowDisplay ? '100%' : 345,
				display: isRowDisplay ? 'flex' : 'initial',
			}}
		>
			{!isRowDisplay && (
				<CardHeader
					avatar={<Avatar aria-label='recipe' src={avatarImage} />}
					title={`@${avatarName}`}
				/>
			)}
			<CardMedia
				component='img'
				height='194'
				image={image}
				alt={altImage}
				loading='lazy'
				sx={
					isRowDisplay
						? { flex: { md: 2 }, width: '200px', minWidth: '200px' }
						: {}
				}
			/>
			<CardContent
				sx={
					isRowDisplay
						? { height: { md: '120px' }, flex: { md: 2 } }
						: { height: '120px' }
				}
			>
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
