import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography, } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
export var CardPost = function (_a) {
    var image = _a.image, avatarImage = _a.avatarImage, avatarName = _a.avatarName, altImage = _a.altImage, likes = _a.likes;
    return (_jsxs(Card, { sx: { width: 345 }, children: [_jsx(CardHeader, { avatar: _jsx(Avatar, { "aria-label": 'recipe', src: avatarImage }), title: "@".concat(avatarName) }), _jsx(CardMedia, { component: 'img', height: '194', image: image, alt: altImage, loading: 'lazy' }), _jsxs(CardContent, { sx: { height: '120px' }, children: [_jsxs(Box, { display: 'flex', alignItems: 'center', gap: 2, mb: 1, children: [_jsx(FavoriteIcon, { color: 'primary' }), _jsx(Typography, { variant: 'body2', color: 'text.secondary', children: likes })] }), _jsx(Typography, { variant: 'body2', color: 'text.secondary', className: 'capitalize-first-letter', children: altImage })] })] }));
};
CardPost.propTypes = {
    image: PropTypes.string.isRequired,
    avatarImage: PropTypes.string.isRequired,
    avatarName: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
};
