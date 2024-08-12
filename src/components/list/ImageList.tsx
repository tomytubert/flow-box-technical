import { Box } from '@mui/material'
import { Images } from '../../interfaces/types'
import { CardPost } from '../card/Card'

interface ImageListProps {
	posts: Images[]
	className?: string
}

export const ImageList = ({ posts, className }: ImageListProps) => {
	return (
		<Box gap={2} display='flex' flexDirection='column' className={className}>
			{posts.map((post) => {
				return (
					<CardPost
						key={post.id}
						image={post.urls.full}
						altImage={post.alt_description}
						avatarImage={post.user.profile_image.small}
						avatarName={post.user.instagram_username}
						likes={post.likes}
						isRowDisplay
					/>
				)
			})}
		</Box>
	)
}
