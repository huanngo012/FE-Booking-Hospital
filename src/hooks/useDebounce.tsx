import { useEffect, useState } from 'react'

const useDebounce = (value: any, ms: any) => {
  const [debounceValue, setDebounceValue] = useState('')
  useEffect(() => {
    const setTimeOuteId = setTimeout(() => {
      setDebounceValue(value)
    }, ms)
    return () => {
      clearTimeout(setTimeOuteId)
    }
  }, [value, ms])
  return debounceValue
}

export default useDebounce
