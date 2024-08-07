import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

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
    likes
}: Props) => {
	return (
		<Card sx={{ width: 345 }}>
			<CardHeader
				avatar={<Avatar aria-label='recipe' src={avatarImage} />}
				title={`@${avatarName}`}
			/>
			<CardMedia component='img' height='194' image={image} alt={altImage} />
			<CardContent sx={{ height: '120px' }}>
                <Box display="flex" alignItems="center" gap={2} mb={1}>
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
