import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { AppBar, Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, Typography, } from '@mui/material';
import { usePosts } from './store/postContext';
import { CardGrid } from './components/card-grid/CardGrid';
import { useState } from 'react';
import { Carousel } from './components/carousel/Carousel';
import { ImageGrid } from './components/grid/ImageGrid';
import { ImageList } from './components/list/ImageList';
var views = {
    carousel: 'CAROUSEL',
    card: 'CARD',
    grid: 'GRID',
    list: 'LIST',
};
export var App = function () {
    var _a = usePosts(), data = _a.data, loading = _a.loading, error = _a.error;
    var _b = useState(views.list), selectedView = _b[0], setSelectedView = _b[1];
    if (loading)
        return (_jsx(Container, { sx: {
                minHeight: '90dvh',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
            }, children: _jsx(CircularProgress, { color: 'primary' }) }));
    if (error || !data)
        return (_jsx(Container, { sx: {
                minHeight: '90dvh',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
            }, children: _jsxs(Box, { children: [_jsx(Typography, { variant: 'h6', children: "No data available, please try again" }), _jsx(Button, { size: 'medium', variant: 'contained', sx: { mt: 2 }, onClick: function () { return window.location.reload(); }, children: "Try again" })] }) }));
    var handleChange = function (e) {
        setSelectedView(e.target.value);
    };
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: 'static', sx: { p: 2, backgroundColor: 'primary.light' }, children: _jsxs(Box, { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, children: [_jsx(Typography, { variant: 'h6', children: "Your audience content" }), _jsxs(FormControl, { size: 'small', sx: { minWidth: 120 }, children: [_jsx(InputLabel, { id: 'demo-simple-select-label', sx: { color: 'common.white' }, children: "View" }), _jsxs(Select, { labelId: 'demo-simple-select-label', id: 'demo-simple-select', value: selectedView, label: 'View', onChange: handleChange, sx: { borderRadius: '16px', color: 'common.white' }, children: [_jsx(MenuItem, { value: views.carousel, children: "Carousel" }), _jsx(MenuItem, { value: views.card, children: "Card" }), _jsx(MenuItem, { value: views.grid, children: "Grid" }), _jsx(MenuItem, { value: views.list, children: "List" })] })] })] }) }), _jsxs(Container, { maxWidth: 'md', sx: { marginTop: '2rem', display: 'flex', placeContent: 'center' }, children: [selectedView === views.carousel && _jsx(Carousel, { className: "fade-in", posts: data.results }), selectedView === views.card && _jsx(CardGrid, { className: "fade-in", posts: data.results }), selectedView === views.grid && _jsx(ImageGrid, { className: "fade-in", posts: data.results }), selectedView === views.list && _jsx(ImageList, { className: "fade-in", posts: data.results })] })] }));
};
export default App;
