import { ImageList, ImageListItem } from '@mui/material'
import { Images } from '../../interfaces/types'

interface Props {
	posts: Images[]
}

export const ImageGrid = ({ posts }: Props) => {
	return (
		<ImageList
			sx={{ width: 500 }}
			cols={3}
			rowHeight={164}
		>
			{posts.map((item) => (
				<ImageListItem key={item.id}>
					<img
						srcSet={`${item.urls.full}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						src={`${item.urls.full}?w=164&h=164&fit=crop&auto=format`}
						alt={item.alt_description}
						loading='lazy'
					/>
				</ImageListItem>
			))}
		</ImageList>
	)
}
