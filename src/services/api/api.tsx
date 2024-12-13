import React, { useEffect } from 'react'

import useSWR from 'swr'

export default function Api() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error } = useSWR(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
    fetcher,
  )

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  if (error) return <div>Failed to load data</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.message}</div>
}
