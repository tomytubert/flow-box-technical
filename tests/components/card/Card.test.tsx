import React from 'react'
import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { CardPost } from '../../../src/components/card/Card'

describe('Testing <Card />', () => {
	const post = {
		image: 'https://example.com/image.jpg',
		avatarImage: 'https://example.com/avatar.jpg',
		avatarName: 'example',
		altImage: 'example',
		likes: 100,
	}
	test('should match the snapshot', () => {
		const { container } = render(<CardPost {...post} />)
		expect(container).toMatchSnapshot()
	})
	test('should render the image', () => {
		render(<CardPost {...post} />)

		const { src, alt } = screen.getByAltText('example') as HTMLImageElement
		expect(src).toBe(post.image)
		expect(alt).toBe(post.altImage)
	})
	test('should render the avatar image', () => {
		render(<CardPost {...post} />)
		const avatarDiv = screen.getByLabelText('recipe')
		const { src } = avatarDiv.querySelector('img') as HTMLImageElement
		expect(src).toBe(post.avatarImage)
	})
	test('should render the avatar name', () => {
		render(<CardPost {...post} />)
		const p = screen.getByText(post.avatarName)
		expect(p).toBeTruthy()
	})
	test('should render the likes', () => {
		render(<CardPost {...post} />)
		const p = screen.getByText(post.likes)
		expect(p).toBeTruthy()
	})
})
