import { Images } from '../../interfaces/types';
import PropTypes from 'prop-types';
interface Props {
    posts: Images[];
    className?: string;
}
export declare const CardGrid: {
    ({ posts, className }: Props): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        posts: PropTypes.Validator<any[]>;
        className: PropTypes.Requireable<string>;
    };
};
export {};
