import React from 'react'
import { App } from '../src/App'
import { fireEvent, render, screen } from '@testing-library/react'
import { usePosts } from '../src/store/postContext'

jest.mock('../src/store/postContext')

jest.mock('swiper/react', () => ({
	Swiper: ({ children }: any) => children,
	SwiperSlide: ({ children }: any) => children,
}))

jest.mock('swiper/modules', () => ({
	Navigation: jest.fn(),
	Pagination: jest.fn(),
}))

jest.mock('swiper/css', () => jest.fn())
jest.mock('swiper/css/pagination', () => jest.fn())

describe('Testing <App />', () => {
	test('should match the snapshot when loading is true', () => {
		;(usePosts as jest.Mock).mockReturnValue({
			data: null,
			loading: true,
			error: null,
		})
		const { container } = render(<App />)
		expect(container).toMatchSnapshot()
	})

	test('should match the snapshot when data is loaded', () => {
		;(usePosts as jest.Mock).mockReturnValue({
			data: { total: 10, total_pages: 5, results: [] },
			loading: false,
			error: null,
		})
		const { container } = render(<App />)
		expect(container).toMatchSnapshot()
	})

	test('should match the snapshot when there is an error', () => {
		;(usePosts as jest.Mock).mockReturnValue({
			data: null,
			loading: false,
			error: 'Error fetching posts',
		})
		const { container } = render(<App />)
		expect(container).toMatchSnapshot()
	})

	test('should change view when button is clicked', () => {
	(usePosts as jest.Mock).mockReturnValue({
			data: {
				total: 10,
				total_pages: 5,
				results: [],
			},
			loading: false,
			error: null,
		})
		render(<App />)
		const input = screen.getByDisplayValue('LIST') as HTMLInputElement
		fireEvent.click(input, { target: { value: 'GRID' } })
        expect(input.value).toBe('GRID')    
	})
})
