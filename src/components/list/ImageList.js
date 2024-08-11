import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
export var ImageList = function (_a) {
    var posts = _a.posts, className = _a.className;
    return (_jsx(Box, { gap: 2, display: 'flex', flexDirection: 'column', className: className, children: posts.map(function (post) {
            return (_jsx(CardList, { image: post.urls.full, altImage: post.alt_description, likes: post.likes }, post.id));
        }) }));
};
export var CardList = function (_a) {
    var image = _a.image, altImage = _a.altImage, likes = _a.likes;
    return (_jsxs(Card, { sx: { display: 'flex' }, children: [_jsx(CardMedia, { component: 'img', height: '194', width: '200', image: image, alt: altImage, loading: 'lazy', sx: { flex: { md: 2 }, width: '200px', minWidth: '200px' } }), _jsxs(CardContent, { sx: { height: { md: '120px' }, flex: { md: 2 } }, children: [_jsxs(Box, { display: 'flex', alignItems: 'center', gap: 2, mb: 1, children: [_jsx(FavoriteIcon, { color: 'primary' }), _jsx(Typography, { variant: 'body2', color: 'text.secondary', children: likes })] }), _jsx(Typography, { variant: 'body2', color: 'text.secondary', className: 'capitalize-first-letter', children: altImage })] })] }));
};
ImageList.propTypes = {
    posts: PropTypes.array.isRequired,
    className: PropTypes.string,
};
CardList.propTypes = {
    image: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
};
