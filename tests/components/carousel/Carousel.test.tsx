import React from 'react'

import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import {
	AssetType,
	Color,
	Description,
	Images,
	Type,
} from '../../../src/interfaces/types'
import { Carousel } from '../../../src/components/carousel/Carousel'

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

describe('Testing <Carousel />', () => {
	const posts: Images[] = [
		{
			id: '1',
			slug: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
			alternative_slugs: {
				en: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				es: 'dos-perros-marrones-de-pelo-corto-acostados-en-la-cama-RApQxN_Js5Y',
				ja: 'ベッドに横たわる2匹の茶色のショートコートの犬-RApQxN_Js5Y',
				fr: 'deux-chiens-bruns-a-poil-court-allonges-sur-le-lit-RApQxN_Js5Y',
				it: 'due-cani-marroni-a-pelo-corto-sdraiati-sul-letto-RApQxN_Js5Y',
				ko: '갈색-짧은-털을-입은-개-두-마리가-침대에-누워-있습니다-RApQxN_Js5Y',
				de: 'zwei-braune-hunde-mit-kurzem-fell-liegen-auf-dem-bett-RApQxN_Js5Y',
				pt: 'dois-caes-de-pelo-curto-marrom-deitados-na-cama-RApQxN_Js5Y',
			},
			created_at: new Date('2019-02-15T04:56:54Z'),
			updated_at: new Date('2024-07-26T09:23:20Z'),
			promoted_at: new Date('2019-02-16T09:43:30Z'),
			width: 4096,
			height: 3273,
			color: '#262626' as Color,
			blur_hash: 'L98D;F8^T1bI?HM_NeW=D%-;M_X9',
			description: 'Deuce and Ruby. Brother and sister. Friend and enemy.',
			alt_description: 'two brown short-coated dogs laying on bed',
			breadcrumbs: [
				{
					slug: 'images',
					title: '1,000,000+ Free Images',
					index: 0,
					type: 'landing_page' as Type as Type,
				},
				{
					slug: 'feelings',
					title: 'Feelings Images',
					index: 1,
					type: 'landing_page' as Type,
				},
				{
					slug: 'transformation',
					title: 'Transformation Pictures',
					index: 2,
					type: 'landing_page' as Type,
				},
			],
			urls: {
				raw: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3',
				full: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=85',
				regular:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=1080',
				small:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=400',
				thumb:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=200',
				small_s3:
					'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1550206574-42cfa61e2a9d',
			},
			links: {
				self: 'https://api.unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				html: 'https://unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				download:
					'https://unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
				download_location:
					'https://api.unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
			},
			likes: 154,
			liked_by_user: false,
			current_user_collections: [],
			sponsorship: null,
			topic_submissions: {
				animals: {
					status: 'approved',
					approved_on: new Date('2021-03-09T15:05:30Z'),
				},
			},
			asset_type: 'photo' as AssetType,
			user: {
				id: '9wtAp2XdrWs',
				updated_at: new Date('2024-05-02T22:04:16Z'),
				username: 'jaredmurray',
				name: 'Jared Murray',
				first_name: 'Jared',
				last_name: 'Murray',
				twitter_username: 'Jared_84',
				portfolio_url: 'http://jaredmurrayphotos.com',
				bio: "I'm one of those incredibly lucky people that gets to do something they love and be paid for it. \r\n Based in Southern California but service the continental United States.",
				location: 'Southern California',
				links: {
					self: 'https://api.unsplash.com/users/jaredmurray',
					html: 'https://unsplash.com/@jaredmurray',
					photos: 'https://api.unsplash.com/users/jaredmurray/photos',
					likes: 'https://api.unsplash.com/users/jaredmurray/likes',
					portfolio: 'https://api.unsplash.com/users/jaredmurray/portfolio',
					following: 'https://api.unsplash.com/users/jaredmurray/following',
					followers: 'https://api.unsplash.com/users/jaredmurray/followers',
				},
				profile_image: {
					small:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
					medium:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
					large:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
				},
				instagram_username: 'jaredmurray',
				total_collections: 0,
				total_likes: 0,
				total_photos: 46,
				total_promoted_photos: 12,
				total_illustrations: 0,
				total_promoted_illustrations: 0,
				accepted_tos: true,
				for_hire: true,
				social: {
					instagram_username: 'jaredmurray',
					portfolio_url: 'http://jaredmurrayphotos.com',
					twitter_username: 'Jared_84',
					paypal_email: null,
				},
			},
			tags: [
				{
					type: 'landing_page' as Type,
					title: 'dogs',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'landing_page' as Type,
					title: 'dog',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'search' as Type,
					title: 'two dogs',
				},
			],
		},
		{
			id: '2',
			slug: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
			alternative_slugs: {
				en: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				es: 'dos-perros-marrones-de-pelo-corto-acostados-en-la-cama-RApQxN_Js5Y',
				ja: 'ベッドに横たわる2匹の茶色のショートコートの犬-RApQxN_Js5Y',
				fr: 'deux-chiens-bruns-a-poil-court-allonges-sur-le-lit-RApQxN_Js5Y',
				it: 'due-cani-marroni-a-pelo-corto-sdraiati-sul-letto-RApQxN_Js5Y',
				ko: '갈색-짧은-털을-입은-개-두-마리가-침대에-누워-있습니다-RApQxN_Js5Y',
				de: 'zwei-braune-hunde-mit-kurzem-fell-liegen-auf-dem-bett-RApQxN_Js5Y',
				pt: 'dois-caes-de-pelo-curto-marrom-deitados-na-cama-RApQxN_Js5Y',
			},
			created_at: new Date('2019-02-15T04:56:54Z'),
			updated_at: new Date('2024-07-26T09:23:20Z'),
			promoted_at: new Date('2019-02-16T09:43:30Z'),
			width: 4096,
			height: 3273,
			color: '#262626' as Color,
			blur_hash: 'L98D;F8^T1bI?HM_NeW=D%-;M_X9',
			description: 'Deuce and Ruby. Brother and sister. Friend and enemy.',
			alt_description: 'two brown short-coated dogs laying on bed',
			breadcrumbs: [
				{
					slug: 'images',
					title: '1,000,000+ Free Images',
					index: 0,
					type: 'landing_page' as Type,
				},
				{
					slug: 'feelings',
					title: 'Feelings Images',
					index: 1,
					type: 'landing_page' as Type,
				},
				{
					slug: 'transformation',
					title: 'Transformation Pictures',
					index: 2,
					type: 'landing_page' as Type,
				},
			],
			urls: {
				raw: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3',
				full: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=85',
				regular:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=1080',
				small:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=400',
				thumb:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=200',
				small_s3:
					'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1550206574-42cfa61e2a9d',
			},
			links: {
				self: 'https://api.unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				html: 'https://unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				download:
					'https://unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
				download_location:
					'https://api.unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
			},
			likes: 154,
			liked_by_user: false,
			current_user_collections: [],
			sponsorship: null,
			topic_submissions: {
				animals: {
					status: 'approved',
					approved_on: new Date('2021-03-09T15:05:30Z'),
				},
			},
			asset_type: 'photo' as AssetType,
			user: {
				id: '9wtAp2XdrWs',
				updated_at: new Date('2024-05-02T22:04:16Z'),
				username: 'jaredmurray',
				name: 'Jared Murray',
				first_name: 'Jared',
				last_name: 'Murray',
				twitter_username: 'Jared_84',
				portfolio_url: 'http://jaredmurrayphotos.com',
				bio: "I'm one of those incredibly lucky people that gets to do something they love and be paid for it. \r\n Based in Southern California but service the continental United States.",
				location: 'Southern California',
				links: {
					self: 'https://api.unsplash.com/users/jaredmurray',
					html: 'https://unsplash.com/@jaredmurray',
					photos: 'https://api.unsplash.com/users/jaredmurray/photos',
					likes: 'https://api.unsplash.com/users/jaredmurray/likes',
					portfolio: 'https://api.unsplash.com/users/jaredmurray/portfolio',
					following: 'https://api.unsplash.com/users/jaredmurray/following',
					followers: 'https://api.unsplash.com/users/jaredmurray/followers',
				},
				profile_image: {
					small:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
					medium:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
					large:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
				},
				instagram_username: 'jaredmurray',
				total_collections: 0,
				total_likes: 0,
				total_photos: 46,
				total_promoted_photos: 12,
				total_illustrations: 0,
				total_promoted_illustrations: 0,
				accepted_tos: true,
				for_hire: true,
				social: {
					instagram_username: 'jaredmurray',
					portfolio_url: 'http://jaredmurrayphotos.com',
					twitter_username: 'Jared_84',
					paypal_email: null,
				},
			},
			tags: [
				{
					type: 'landing_page' as Type,
					title: 'dogs',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'landing_page' as Type,
					title: 'dog',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'search' as Type,
					title: 'two dogs',
				},
			],
		},
		{
			id: '3',
			slug: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
			alternative_slugs: {
				en: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				es: 'dos-perros-marrones-de-pelo-corto-acostados-en-la-cama-RApQxN_Js5Y',
				ja: 'ベッドに横たわる2匹の茶色のショートコートの犬-RApQxN_Js5Y',
				fr: 'deux-chiens-bruns-a-poil-court-allonges-sur-le-lit-RApQxN_Js5Y',
				it: 'due-cani-marroni-a-pelo-corto-sdraiati-sul-letto-RApQxN_Js5Y',
				ko: '갈색-짧은-털을-입은-개-두-마리가-침대에-누워-있습니다-RApQxN_Js5Y',
				de: 'zwei-braune-hunde-mit-kurzem-fell-liegen-auf-dem-bett-RApQxN_Js5Y',
				pt: 'dois-caes-de-pelo-curto-marrom-deitados-na-cama-RApQxN_Js5Y',
			},
			created_at: new Date('2019-02-15T04:56:54Z'),
			updated_at: new Date('2024-07-26T09:23:20Z'),
			promoted_at: new Date('2019-02-16T09:43:30Z'),
			width: 4096,
			height: 3273,
			color: '#262626' as Color,
			blur_hash: 'L98D;F8^T1bI?HM_NeW=D%-;M_X9',
			description: 'Deuce and Ruby. Brother and sister. Friend and enemy.',
			alt_description: 'two brown short-coated dogs laying on bed',
			breadcrumbs: [
				{
					slug: 'images',
					title: '1,000,000+ Free Images',
					index: 0,
					type: 'landing_page' as Type,
				},
				{
					slug: 'feelings',
					title: 'Feelings Images',
					index: 1,
					type: 'landing_page' as Type,
				},
				{
					slug: 'transformation',
					title: 'Transformation Pictures',
					index: 2,
					type: 'landing_page' as Type,
				},
			],
			urls: {
				raw: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3',
				full: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=85',
				regular:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=1080',
				small:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=400',
				thumb:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=200',
				small_s3:
					'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1550206574-42cfa61e2a9d',
			},
			links: {
				self: 'https://api.unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				html: 'https://unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				download:
					'https://unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
				download_location:
					'https://api.unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
			},
			likes: 154,
			liked_by_user: false,
			current_user_collections: [],
			sponsorship: null,
			topic_submissions: {
				animals: {
					status: 'approved',
					approved_on: new Date('2021-03-09T15:05:30Z'),
				},
			},
			asset_type: 'photo' as AssetType,
			user: {
				id: '9wtAp2XdrWs',
				updated_at: new Date('2024-05-02T22:04:16Z'),
				username: 'jaredmurray',
				name: 'Jared Murray',
				first_name: 'Jared',
				last_name: 'Murray',
				twitter_username: 'Jared_84',
				portfolio_url: 'http://jaredmurrayphotos.com',
				bio: "I'm one of those incredibly lucky people that gets to do something they love and be paid for it. \r\n Based in Southern California but service the continental United States.",
				location: 'Southern California',
				links: {
					self: 'https://api.unsplash.com/users/jaredmurray',
					html: 'https://unsplash.com/@jaredmurray',
					photos: 'https://api.unsplash.com/users/jaredmurray/photos',
					likes: 'https://api.unsplash.com/users/jaredmurray/likes',
					portfolio: 'https://api.unsplash.com/users/jaredmurray/portfolio',
					following: 'https://api.unsplash.com/users/jaredmurray/following',
					followers: 'https://api.unsplash.com/users/jaredmurray/followers',
				},
				profile_image: {
					small:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
					medium:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
					large:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
				},
				instagram_username: 'jaredmurray',
				total_collections: 0,
				total_likes: 0,
				total_photos: 46,
				total_promoted_photos: 12,
				total_illustrations: 0,
				total_promoted_illustrations: 0,
				accepted_tos: true,
				for_hire: true,
				social: {
					instagram_username: 'jaredmurray',
					portfolio_url: 'http://jaredmurrayphotos.com',
					twitter_username: 'Jared_84',
					paypal_email: null,
				},
			},
			tags: [
				{
					type: 'landing_page' as Type,
					title: 'dogs',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'landing_page' as Type,
					title: 'dog',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'search' as Type,
					title: 'two dogs',
				},
			],
		},
		{
			id: '4',
			slug: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
			alternative_slugs: {
				en: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				es: 'dos-perros-marrones-de-pelo-corto-acostados-en-la-cama-RApQxN_Js5Y',
				ja: 'ベッドに横たわる2匹の茶色のショートコートの犬-RApQxN_Js5Y',
				fr: 'deux-chiens-bruns-a-poil-court-allonges-sur-le-lit-RApQxN_Js5Y',
				it: 'due-cani-marroni-a-pelo-corto-sdraiati-sul-letto-RApQxN_Js5Y',
				ko: '갈색-짧은-털을-입은-개-두-마리가-침대에-누워-있습니다-RApQxN_Js5Y',
				de: 'zwei-braune-hunde-mit-kurzem-fell-liegen-auf-dem-bett-RApQxN_Js5Y',
				pt: 'dois-caes-de-pelo-curto-marrom-deitados-na-cama-RApQxN_Js5Y',
			},
			created_at: new Date('2019-02-15T04:56:54Z'),
			updated_at: new Date('2024-07-26T09:23:20Z'),
			promoted_at: new Date('2019-02-16T09:43:30Z'),
			width: 4096,
			height: 3273,
			color: '#262626' as Color,
			blur_hash: 'L98D;F8^T1bI?HM_NeW=D%-;M_X9',
			description: 'Deuce and Ruby. Brother and sister. Friend and enemy.',
			alt_description: 'two brown short-coated dogs laying on bed',
			breadcrumbs: [
				{
					slug: 'images',
					title: '1,000,000+ Free Images',
					index: 0,
					type: 'landing_page' as Type,
				},
				{
					slug: 'feelings',
					title: 'Feelings Images',
					index: 1,
					type: 'landing_page' as Type,
				},
				{
					slug: 'transformation',
					title: 'Transformation Pictures',
					index: 2,
					type: 'landing_page' as Type,
				},
			],
			urls: {
				raw: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3',
				full: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=85',
				regular:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=1080',
				small:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=400',
				thumb:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=200',
				small_s3:
					'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1550206574-42cfa61e2a9d',
			},
			links: {
				self: 'https://api.unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				html: 'https://unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				download:
					'https://unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
				download_location:
					'https://api.unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
			},
			likes: 154,
			liked_by_user: false,
			current_user_collections: [],
			sponsorship: null,
			topic_submissions: {
				animals: {
					status: 'approved',
					approved_on: new Date('2021-03-09T15:05:30Z'),
				},
			},
			asset_type: 'photo' as AssetType,
			user: {
				id: '9wtAp2XdrWs',
				updated_at: new Date('2024-05-02T22:04:16Z'),
				username: 'jaredmurray',
				name: 'Jared Murray',
				first_name: 'Jared',
				last_name: 'Murray',
				twitter_username: 'Jared_84',
				portfolio_url: 'http://jaredmurrayphotos.com',
				bio: "I'm one of those incredibly lucky people that gets to do something they love and be paid for it. \r\n Based in Southern California but service the continental United States.",
				location: 'Southern California',
				links: {
					self: 'https://api.unsplash.com/users/jaredmurray',
					html: 'https://unsplash.com/@jaredmurray',
					photos: 'https://api.unsplash.com/users/jaredmurray/photos',
					likes: 'https://api.unsplash.com/users/jaredmurray/likes',
					portfolio: 'https://api.unsplash.com/users/jaredmurray/portfolio',
					following: 'https://api.unsplash.com/users/jaredmurray/following',
					followers: 'https://api.unsplash.com/users/jaredmurray/followers',
				},
				profile_image: {
					small:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
					medium:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
					large:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
				},
				instagram_username: 'jaredmurray',
				total_collections: 0,
				total_likes: 0,
				total_photos: 46,
				total_promoted_photos: 12,
				total_illustrations: 0,
				total_promoted_illustrations: 0,
				accepted_tos: true,
				for_hire: true,
				social: {
					instagram_username: 'jaredmurray',
					portfolio_url: 'http://jaredmurrayphotos.com',
					twitter_username: 'Jared_84',
					paypal_email: null,
				},
			},
			tags: [
				{
					type: 'landing_page' as Type,
					title: 'dogs',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'landing_page' as Type,
					title: 'dog',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'search' as Type,
					title: 'two dogs',
				},
			],
		},
		{
			id: '5',
			slug: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
			alternative_slugs: {
				en: 'two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				es: 'dos-perros-marrones-de-pelo-corto-acostados-en-la-cama-RApQxN_Js5Y',
				ja: 'ベッドに横たわる2匹の茶色のショートコートの犬-RApQxN_Js5Y',
				fr: 'deux-chiens-bruns-a-poil-court-allonges-sur-le-lit-RApQxN_Js5Y',
				it: 'due-cani-marroni-a-pelo-corto-sdraiati-sul-letto-RApQxN_Js5Y',
				ko: '갈색-짧은-털을-입은-개-두-마리가-침대에-누워-있습니다-RApQxN_Js5Y',
				de: 'zwei-braune-hunde-mit-kurzem-fell-liegen-auf-dem-bett-RApQxN_Js5Y',
				pt: 'dois-caes-de-pelo-curto-marrom-deitados-na-cama-RApQxN_Js5Y',
			},
			created_at: new Date('2019-02-15T04:56:54Z'),
			updated_at: new Date('2024-07-26T09:23:20Z'),
			promoted_at: new Date('2019-02-16T09:43:30Z'),
			width: 4096,
			height: 3273,
			color: '#262626' as Color,
			blur_hash: 'L98D;F8^T1bI?HM_NeW=D%-;M_X9',
			description: 'Deuce and Ruby. Brother and sister. Friend and enemy.',
			alt_description: 'two brown short-coated dogs laying on bed',
			breadcrumbs: [
				{
					slug: 'images',
					title: '1,000,000+ Free Images',
					index: 0,
					type: 'landing_page' as Type,
				},
				{
					slug: 'feelings',
					title: 'Feelings Images',
					index: 1,
					type: 'landing_page' as Type,
				},
				{
					slug: 'transformation',
					title: 'Transformation Pictures',
					index: 2,
					type: 'landing_page' as Type,
				},
			],
			urls: {
				raw: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3',
				full: 'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=85',
				regular:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=1080',
				small:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=400',
				thumb:
					'https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww&ixlib=rb-4.0.3&q=80&w=200',
				small_s3:
					'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1550206574-42cfa61e2a9d',
			},
			links: {
				self: 'https://api.unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				html: 'https://unsplash.com/photos/two-brown-short-coated-dogs-laying-on-bed-RApQxN_Js5Y',
				download:
					'https://unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
				download_location:
					'https://api.unsplash.com/photos/RApQxN_Js5Y/download?ixid=M3w2NDA4MTd8MHwxfHNlYXJjaHwxfHxkb2dzfGVufDB8fHx8MTcyMzM2NzY1N3ww',
			},
			likes: 154,
			liked_by_user: false,
			current_user_collections: [],
			sponsorship: null,
			topic_submissions: {
				animals: {
					status: 'approved',
					approved_on: new Date('2021-03-09T15:05:30Z'),
				},
			},
			asset_type: 'photo' as AssetType,
			user: {
				id: '9wtAp2XdrWs',
				updated_at: new Date('2024-05-02T22:04:16Z'),
				username: 'jaredmurray',
				name: 'Jared Murray',
				first_name: 'Jared',
				last_name: 'Murray',
				twitter_username: 'Jared_84',
				portfolio_url: 'http://jaredmurrayphotos.com',
				bio: "I'm one of those incredibly lucky people that gets to do something they love and be paid for it. \r\n Based in Southern California but service the continental United States.",
				location: 'Southern California',
				links: {
					self: 'https://api.unsplash.com/users/jaredmurray',
					html: 'https://unsplash.com/@jaredmurray',
					photos: 'https://api.unsplash.com/users/jaredmurray/photos',
					likes: 'https://api.unsplash.com/users/jaredmurray/likes',
					portfolio: 'https://api.unsplash.com/users/jaredmurray/portfolio',
					following: 'https://api.unsplash.com/users/jaredmurray/following',
					followers: 'https://api.unsplash.com/users/jaredmurray/followers',
				},
				profile_image: {
					small:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
					medium:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
					large:
						'https://images.unsplash.com/profile-1640127628945-84c0029cb2a9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
				},
				instagram_username: 'jaredmurray',
				total_collections: 0,
				total_likes: 0,
				total_photos: 46,
				total_promoted_photos: 12,
				total_illustrations: 0,
				total_promoted_illustrations: 0,
				accepted_tos: true,
				for_hire: true,
				social: {
					instagram_username: 'jaredmurray',
					portfolio_url: 'http://jaredmurrayphotos.com',
					twitter_username: 'Jared_84',
					paypal_email: null,
				},
			},
			tags: [
				{
					type: 'landing_page' as Type,
					title: 'dogs',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'landing_page' as Type,
					title: 'dog',
					source: {
						ancestry: {
							type: {
								slug: 'images',
								pretty_slug: 'Images',
							},
							category: {
								slug: 'animals',
								pretty_slug: 'Animals',
							},
							subcategory: {
								slug: 'dog',
								pretty_slug: 'Dog',
							},
						},
						title: 'Dog Images & Pictures',
						subtitle: 'Download Free Dog Images',
						description:
							"Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
						meta_title: 'Dog Pictures | Download Free Images on Unsplash',
						meta_description:
							'Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.',
						cover_photo: {
							id: 'tGBRQw52Thw',
							slug: 'short-coated-brown-dog-tGBRQw52Thw',
							alternative_slugs: {
								en: 'short-coated-brown-dog-tGBRQw52Thw',
								es: 'perro-marron-de-pelo-corto-tGBRQw52Thw',
								ja: 'ショートコートの茶色の犬-tGBRQw52Thw',
								fr: 'chien-brun-a-poil-court-tGBRQw52Thw',
								it: 'cane-marrone-a-pelo-corto-tGBRQw52Thw',
								ko: '짧은-털을-입은-갈색-개-tGBRQw52Thw',
								de: 'brauner-hund-mit-kurzem-fell-tGBRQw52Thw',
								pt: 'cao-marrom-de-pelo-curto-tGBRQw52Thw',
							},
							created_at: new Date('2018-01-19T14:20:08Z'),
							updated_at: new Date('2024-08-05T19:37:18Z'),
							promoted_at: new Date('2018-01-20T10:59:48Z'),
							width: 3264,
							height: 4896,
							color: '#262626' as Color,
							blur_hash: 'LQDcH.smX9NH_NNG%LfQx^Rk-pj@',
							description: 'Dog day out' as Description,
							alt_description: 'short-coated brown dog',
							breadcrumbs: [],
							urls: {
								raw: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3',
								full: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
								regular:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
								small:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
								thumb:
									'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
								small_s3:
									'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a',
							},
							links: {
								self: 'https://api.unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								html: 'https://unsplash.com/photos/short-coated-brown-dog-tGBRQw52Thw',
								download: 'https://unsplash.com/photos/tGBRQw52Thw/download',
								download_location:
									'https://api.unsplash.com/photos/tGBRQw52Thw/download',
							},
							likes: 849,
							liked_by_user: false,
							current_user_collections: [],
							sponsorship: null,
							topic_submissions: {},
							asset_type: 'photo' as AssetType,
							user: {
								id: 'toGyhBVt2M4',
								updated_at: new Date('2024-07-17T01:19:37Z'),
								username: 'fredrikohlander',
								name: 'Fredrik Öhlander',
								first_name: 'Fredrik',
								last_name: 'Öhlander',
								twitter_username: null,
								portfolio_url: null,
								bio: 'fredrikohlander@gmail.com',
								location: 'El Stockholmo, Sweden',
								links: {
									self: 'https://api.unsplash.com/users/fredrikohlander',
									html: 'https://unsplash.com/@fredrikohlander',
									photos:
										'https://api.unsplash.com/users/fredrikohlander/photos',
									likes: 'https://api.unsplash.com/users/fredrikohlander/likes',
									portfolio:
										'https://api.unsplash.com/users/fredrikohlander/portfolio',
									following:
										'https://api.unsplash.com/users/fredrikohlander/following',
									followers:
										'https://api.unsplash.com/users/fredrikohlander/followers',
								},
								profile_image: {
									small:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
									medium:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
									large:
										'https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
								},
								instagram_username: 'new_final_final.jpg',
								total_collections: 10,
								total_likes: 127,
								total_photos: 268,
								total_promoted_photos: 50,
								total_illustrations: 0,
								total_promoted_illustrations: 0,
								accepted_tos: true,
								for_hire: true,
								social: {
									instagram_username: 'new_final_final.jpg',
									portfolio_url: null,
									twitter_username: null,
									paypal_email: null,
								},
							},
						},
					},
				},
				{
					type: 'search' as Type,
					title: 'two dogs',
				},
			],
		},
	]
	test('should match the snapshot', () => {
		const { container } = render(<Carousel posts={posts} />)
		expect(container).toMatchSnapshot()
	})
	test('should render the correct number of posts', () => {
		render(<Carousel posts={posts} />)
		const images = screen.getAllByRole('img')
		expect(images.length).toBe(posts.length)
	})
})
