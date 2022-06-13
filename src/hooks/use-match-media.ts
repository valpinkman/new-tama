import { useState, useEffect } from 'react'

// pass a query like `(min-width: 768px)`
const useMatchMedia = (query: string) => {
  const [matches, setMatches] = useState(() => {
    try {
      return matchMedia(query).matches
    } catch (err) {
      return false
    }
  })

  useEffect(() => {
    const mediaQueryList = matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)

    // note 1: safari currently doesn't support add/removeEventListener so we use add/removeListener
    // note 2: add/removeListener are maybe marked as deprecated, but that could be wrong
    //         see https://github.com/microsoft/TypeScript/issues/32210
    mediaQueryList.addListener(onChange)
    return () => mediaQueryList.removeListener(onChange)
  }, [query])

  return matches
}

export default useMatchMedia

// Hook
export function useMedia<T>(queries: string[], values: T[], defaultValue: T) {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map(q => window.matchMedia(q))

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  // State and setter for matched value
  const [value, setValue] = useState(getValue)

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue)
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach(mql => mql.addListener(handler))
      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
    },
    [] // Empty array ensures effect is only run on mount and unmount
  )

  return value
}