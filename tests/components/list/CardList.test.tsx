import React from 'react'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { CardList } from '../../../src/components/list/ImageList'

describe('Testing <ImageList />', () => {
	const post = {
		image: 'https://images.unsplash.com/photo-1634170380000-0b3b3b3b3b3b',
		altImage: 'A beautiful image',
		likes: 100,
		id: '1',
	}

	test('should match the snapshot', () => {
		const { container } = render(<CardList {...post} />)
		expect(container).toMatchSnapshot()
	})

	test('should render the image', () => {
		render(<CardList {...post} />)
		const { src, alt } = screen.getByRole('img') as HTMLImageElement
		expect(src).toBe(post.image)
		expect(alt).toBe(post.altImage)
	})

	test('should render the likes', () => {
		render(<CardList {...post} />)
		const likes = screen.getByText(post.likes)
        expect(likes).toBeTruthy()
    })

	test('should render the description', () => {
		render(<CardList {...post} />)
        const description = screen.getByText(post.altImage)
        expect(description).toBeTruthy()
        expect(description).toHaveTextContent(post.altImage);

	})
})
