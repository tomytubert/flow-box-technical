import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';
export var Carousel = function (_a) {
    var posts = _a.posts, className = _a.className;
    return (_jsx(Swiper, { slidesPerView: 1, spaceBetween: 10, pagination: {
            clickable: true,
        }, breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }, modules: [Pagination], className: "mySwiper ".concat(className), children: posts.map(function (post) {
            return (_jsxs(SwiperSlide, { children: [_jsx("img", { src: post.urls.full, alt: post.alt_description, loading: 'lazy' }), _jsx("div", { className: 'swiper-lazy-preloader swiper-lazy-preloader-white' })] }, post.id));
        }) }));
};
Carousel.propTypes = {
    posts: PropTypes.array.isRequired,
    className: PropTypes.string,
};
