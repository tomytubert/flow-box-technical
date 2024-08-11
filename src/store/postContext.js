import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';
var PostsContext = createContext(null);
export function PostsContextProvider(_a) {
    var children = _a.children;
    var _b = useFetch("https://api.unsplash.com/search/photos?client_id=".concat(process.env.UNSPLASH_ACCESS_KEY, "&query=dogs&per_page=15&page=1")), data = _b.data, error = _b.error, loading = _b.loading;
    return (_jsx(PostsContext.Provider, { value: { data: data, loading: loading, error: error }, children: children }));
}
export var usePosts = function () {
    var context = useContext(PostsContext);
    if (!context) {
        throw new Error('usePosts must be used within a PostsContextProvider');
    }
    return context;
};
