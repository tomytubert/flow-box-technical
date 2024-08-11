import { jsx as _jsx } from "react/jsx-runtime";
import { ImageList, ImageListItem } from '@mui/material';
import PropTypes from 'prop-types';
export var ImageGrid = function (_a) {
    var posts = _a.posts, className = _a.className;
    return (_jsx(ImageList, { sx: { width: 500 }, cols: 3, rowHeight: 164, className: className, children: posts.map(function (item) { return (_jsx(ImageListItem, { children: _jsx("img", { srcSet: "".concat(item.urls.full, "?w=164&h=164&fit=crop&auto=format&dpr=2 2x"), src: "".concat(item.urls.full, "?w=164&h=164&fit=crop&auto=format"), alt: item.alt_description, loading: 'lazy' }) }, item.id)); }) }));
};
ImageGrid.propTypes = {
    posts: PropTypes.array.isRequired,
    className: PropTypes.string,
};
