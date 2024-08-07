
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './carousel.css'
import { Images } from '../../interfaces/types'

interface Props {
	posts: Images[]
}

export const Carousel = ({ posts }: Props) => {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			breakpoints={{
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			}}
			modules={[Pagination]}
			className='mySwiper'
		>
			{posts.map((post) => {
				return (
					<SwiperSlide key={post.id}>
						<img
							src={post.urls.full}
							alt={post.alt_description}
							loading='lazy'
						/>
						<div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}
