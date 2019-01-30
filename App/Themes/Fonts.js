const type = {
  base: 'Roboto-Medium',
  bold: 'Roboto-Bold'
}

const size = {
  input: 18,
  xlarge: 22,
  large: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  normalBold: {
    fontFamily: type.bold,
    fontWeight: 'bold',
    fontSize: size.regular
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small
  },
  smallBold: {
    fontFamily: type.bold,
    fontWeight: 'bold',
    fontSize: size.small
  },
  button: {
    fontFamily: type.base,
    fontSize: size.large
  }
}

export default {
  type,
  size,
  style
}
