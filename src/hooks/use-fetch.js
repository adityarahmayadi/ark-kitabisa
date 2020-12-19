import { useCallback, useState } from 'react'

export const useFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback((url = '', fetchOptions = {}) => {
    setLoading(true)
    fetch(url, fetchOptions)
      .then(res => res.json())
      .then(result => {
        setLoading(false)
        setData(JSON.parse(result.contents).data)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [])
  return [fetchData, {data, error, loading}]
}