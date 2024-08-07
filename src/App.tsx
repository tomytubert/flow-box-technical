import './App.css'
import { CardPost } from './componentes/card/Card'
import { Container, Grid } from '@mui/material'
import { usePosts } from './store/postContext'

function App() {
 const { data, loading, error } = usePosts()

	if (loading) return <p>Loading...</p>
	if (error || !data) return <p>Error</p>
  
	return (
		<>
			<Container maxWidth='md' sx={{marginTop:"2rem"}}>
				<Grid container spacing={2} rowGap={2}>
					{data.results.map((post) => {
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
			</Container>
		</>
	)
}

export default App
