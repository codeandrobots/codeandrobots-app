
export const validateEmail = (email) => {
  // Closely match reg ex used in backend, e.g. /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  const re = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/
  return re.test(String(email).toLowerCase())
}

export const validateName = (name) => {
  var re = /^[a-zA-Z0-9\-_ ]+$/
  return re.test(String(name))
}
