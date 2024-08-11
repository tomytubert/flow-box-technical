import { jsx as _jsx } from "react/jsx-runtime";
import { Grid } from '@mui/material';
import { CardPost } from '../card/Card';
import PropTypes from 'prop-types';
export var CardGrid = function (_a) {
    var posts = _a.posts, className = _a.className;
    return (_jsx(Grid, { container: true, spacing: 2, rowGap: 2, children: posts.map(function (post) {
            return (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', className: className, children: _jsx(CardPost, { image: post.urls.full, altImage: post.alt_description, avatarImage: post.user.profile_image.small, avatarName: post.user.instagram_username, likes: post.likes }) }, post.id));
        }) }));
};
//PropTypes
CardGrid.propTypes = {
    posts: PropTypes.array.isRequired,
    className: PropTypes.string,
};
