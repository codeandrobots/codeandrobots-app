
export const palette = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  red: 'red',
  offwhite: '#FAFAFA',
  grey: '#9B9B9B',
  greyTranslucent: '#DFDFDF',
  darkgrey: '#516173',
  lightgrey: '#ECECEC',
  primary: '#F9BC62', // Orange yellow
  primaryDark: '#354052', // Almost black
  primaryTranslucent: '#FCE2BA' // White on orange yellow with 50% opacity
}

export default {
  ...palette,
  background: palette.offwhite,
  background_disabled: palette.lightgrey,
  statusBar: {
    background: palette.primary
  },
  nav: {
    background: palette.primary,
    text: palette.black
  },
  text: palette.primaryDark,
  text_disabled: palette.grey,
  icon: palette.darkgrey,
  icon_primary: palette.primary,
  icon_dark: palette.primaryDark,
  icon_disabled: palette.grey,
  button: {
    background: palette.white,
    text: palette.primaryDark,
    border: palette.primaryTranslucent,
    border_disabled: palette.greyTranslucent
  },
  link: {
    text: palette.primaryDark
  },
  list: {
    separator: palette.lightgrey
  },
  carousel: {
    bubble: palette.white,
    bubble_active: palette.primaryDark
  },
  footer: {
    background: palette.primary
  }
}
