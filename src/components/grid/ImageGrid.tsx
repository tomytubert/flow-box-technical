import { ImageList, ImageListItem } from '@mui/material'
import { Images } from '../../interfaces/types'

interface ImageGridProps {
	posts: Images[]
	className?: string
}

export const ImageGrid = ({ posts, className }: ImageGridProps) => {
	return (
		<ImageList
			sx={{ width: '100%' }}
			cols={3}
			className={className}
			variant="masonry"
		>
			{posts.map((item) => (
				<ImageListItem key={item.id}>
					<img
						srcSet={`${item.urls.full} 2x`}
						src={`${item.urls.full}`}
						alt={item.alt_description}
						loading='lazy'
					/>
				</ImageListItem>
			))}
		</ImageList>
	)
}