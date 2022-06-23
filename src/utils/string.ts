export const capitalize = (str = ''): string =>
  str
    .toLowerCase()
    .split(' ')
    .map(str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`)
    .join(' ')

export const capitalizeFirst = (str = ''): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
