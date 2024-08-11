import { Images } from '../../interfaces/types';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';
interface Props {
    posts: Images[];
    className?: string;
}
export declare const Carousel: {
    ({ posts, className }: Props): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        posts: PropTypes.Validator<any[]>;
        className: PropTypes.Requireable<string>;
    };
};
export {};
