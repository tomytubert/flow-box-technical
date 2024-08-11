import { Images } from '../../interfaces/types';
import PropTypes from 'prop-types';
interface Props {
    posts: Images[];
    className?: string;
}
interface CardProps {
    image: string;
    altImage: string;
    likes: number;
}
export declare const ImageList: {
    ({ posts, className }: Props): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        posts: PropTypes.Validator<any[]>;
        className: PropTypes.Requireable<string>;
    };
};
export declare const CardList: {
    ({ image, altImage, likes }: CardProps): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        image: PropTypes.Validator<string>;
        altImage: PropTypes.Validator<string>;
        likes: PropTypes.Validator<number>;
    };
};
export {};
