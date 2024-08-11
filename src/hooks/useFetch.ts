import { useEffect, useState } from 'react'
import { Response } from '../interfaces/types'

export default function useFetch(url: string) {
	const [data, setData] = useState<Response | null>(null)
	const [error, setError] = useState<any>(null)
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		;(async () => {
			try {
				setLoading(true)
				const response = await fetch(url)
				const data: Response = await response.json()
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				setData(data)
			} catch (err: any) {
				setError(err)
			} finally {
				setLoading(false)
			}
		})()
	}, [url])

	return { data, error, loading }
}
//
