import { AppBar, Box } from '@mui/material'

export const TopBar = () => {
	return (
		<AppBar position='sticky' sx={{ p: 2 }}>
			<Box display='flex' alignItems='center' gap={4}>
				<svg width='100' height='21' fill='none'>
					<path
						d='M13.552 2.638V.029H0v20.555h2.943v-9.296h9.989V8.706H2.943V2.638h10.609ZM18.328.03h-2.633v20.554h2.633V.03ZM31.6 18.006h-8.397V8.135H31.6v9.871ZM27.388 5.17c-3.717 0-7.125 2.452-7.125 7.9 0 5.45 3.408 7.902 7.125 7.902s7.15-2.453 7.15-7.901c0-5.449-3.46-7.901-7.15-7.901ZM52.363 5.426l-2.97 11.13-3.07-11.13h-2.711l-3.071 11.13-2.97-11.13h-2.813l4.466 15.158h2.375l3.303-12.137 3.434 12.137h2.4l4.44-15.158h-2.813ZM63.54 18.674c-2.426 0-4.388-1.652-4.388-5.578 0-3.925 2.065-5.63 4.389-5.63 2.762 0 4.207 2.093 4.207 5.63 0 3.538-1.472 5.578-4.207 5.578Zm.672-13.505c-2.53 0-3.975.98-4.93 2.452V.03h-2.633v20.555h2.505l.129-1.86c.852 1.317 2.426 2.247 4.62 2.247 3.872 0 6.634-2.995 6.634-7.876 0-4.88-2.684-7.928-6.324-7.928l-.001.002ZM83.215 18.006h-8.397V8.135h8.397v9.871ZM79.003 5.17c-3.717 0-7.125 2.452-7.125 7.9 0 5.45 3.408 7.902 7.125 7.902s7.15-2.453 7.15-7.901c0-5.449-3.433-7.901-7.15-7.901Z'
						fill='#0B1F31'
					/>
					<path
						d='m94.243 12.682 5.267-7.256h-2.943l-3.795 5.216-3.794-5.216h-3.124l5.37 7.36-5.705 7.798h2.994l4.182-5.759 4.181 5.76H100l-5.757-7.903Z'
						fill='#0B1F31'
					/>
				</svg>
			</Box>
		</AppBar>
	)
}
