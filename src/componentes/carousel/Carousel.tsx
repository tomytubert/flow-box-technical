import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Images } from '../../interfaces/types'
import PropTypes from 'prop-types';

import 'swiper/css'
import 'swiper/css/pagination'
import './carousel.css'

interface Props {
	posts: Images[]
	className?: string
}

export const Carousel = ({ posts, className }: Props) => {
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
			className={`mySwiper ${className}`}
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

Carousel.propTypes = {
	posts: PropTypes.array.isRequired,
	className: PropTypes.string,
}