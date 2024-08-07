import { createContext, useContext } from 'react'
import useFetch from '../hooks/useFetch'
import { Response } from '../interfaces/types'

interface PostsContextType {
    data: Response | null
    error: any
    loading: boolean
}

const PostsContext = createContext<PostsContextType | null>(null)

export function PostsContextProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const { data, error, loading } = useFetch(
		`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=dogs&per_page=15&page=1`
	)

	return (
		<PostsContext.Provider value={{ data, loading, error }}>
			{children}
		</PostsContext.Provider>
	)
}

export const usePosts = () => {
    const context = useContext(PostsContext)
    if (!context) {
        throw new Error('usePosts must be used within a PostsContextProvider')
    }
    return context
}
