import { Response } from '../interfaces/types';
interface PostsContextType {
    data: Response | null;
    error: any;
    loading: boolean;
}
export declare function PostsContextProvider({ children, }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const usePosts: () => PostsContextType;
export {};
