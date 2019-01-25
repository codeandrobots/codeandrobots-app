
export const capitalizeFirstLetter = (text) => {
  return (text)
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : text
}

export const capitalizeWords = (text) => {
  const parts = text.split(' ')
  parts.forEach((part, index, parts) => {
    parts[index] = capitalizeFirstLetter(part)
  })
  return parts.join(' ')
}
