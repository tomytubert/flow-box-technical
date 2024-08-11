import { renderHook, waitFor } from '@testing-library/react'
import useFetch from '../../src/hooks/useFetch'

describe('Testing useFetch(', () => {
	const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=dogs&per_page=15&page=1`

	console.log('url', url)
	test('should return initial state', () => {
		const { result } = renderHook(() => useFetch(url))
		const { data, error, loading } = result.current
		expect(data).toBeNull()
		expect(error).toBeNull()
		expect(loading).toBeTruthy()
	})
	test('should return data', async () => {
		const { result } = renderHook(() => useFetch(url))
		await waitFor(() =>
			expect(result.current.data?.results.length).toBeGreaterThan(0)
		)

		const { data, loading } = result.current

		expect(loading).toBeFalsy()
		expect(data?.results.length).toBeGreaterThan(0)
	})

	test('should return error', async () => {
		const { result } = renderHook(() =>
			useFetch(
				'https://api.unsplash.com/search/photos?client_id=invalid_key&query=dogs&per_page=15&page=1'
			)
		)
		await waitFor(() => expect(result.current.loading).toBeFalsy())
		const { error, loading } = result.current
		expect(loading).toBeFalsy()
		expect(error).toBeTruthy()
	})
})
