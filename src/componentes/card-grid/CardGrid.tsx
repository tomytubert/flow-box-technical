import { Grid } from '@mui/material'
import { Images } from '../../interfaces/types'
import { CardPost } from '../card/Card'

interface Props {
	posts: Images[]
}

export const CardGrid = ({ posts }: Props) => {
	return (
		<Grid container spacing={2} rowGap={2}>
			{posts.map((post) => {
				return (
					<Grid
						item
						key={post.id}
						xs={12}
						sm={6}
						md={4}
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<CardPost
							image={post.urls.full}
							altImage={post.alt_description}
							avatarImage={post.user.profile_image.small}
							avatarName={post.user.instagram_username}
							likes={post.likes}
						/>
					</Grid>
				)
			})}
		</Grid>
	)
}
