import PropTypes from 'prop-types';
interface Props {
    image: string;
    altImage: string;
    avatarImage: string;
    avatarName: string;
    likes: number;
}
export declare const CardPost: {
    ({ image, avatarImage, avatarName, altImage, likes, }: Props): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        image: PropTypes.Validator<string>;
        avatarImage: PropTypes.Validator<string>;
        avatarName: PropTypes.Validator<string>;
        altImage: PropTypes.Validator<string>;
        likes: PropTypes.Validator<number>;
    };
};
export {};
