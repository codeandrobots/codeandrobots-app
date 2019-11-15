
export const palette = {
  transparent: 'transparent',
  white: 'white',
  whiteTranslucent: 'rgba(255, 255, 255, 0.8)',
  black: 'black',
  red: 'red',
  offwhite: '#FAFAFA',
  grey: '#9B9B9B',
  greyTranslucent: '#DFDFDF',
  darkgrey: '#516173',
  lightgrey: '#ECECEC',
  primary: '#F9BC62', // Orange yellow
  primaryDark: '#354052', // Almost black
  primaryDarkTranslucent: 'rgba(53, 64, 82, 0.5)', // Almost black with 50% opacity
  primaryTranslucent: '#FCE2BA', // White on orange yellow with 50% opacity
  error: '#E62117' // red
}

export default {
  ...palette,
  background: palette.offwhite,
  background_disabled: palette.lightgrey,
  statusBar: {
    background: palette.offwhite
  },
  nav: {
    background: palette.offwhite,
    text: palette.black
  },
  text: palette.primaryDark,
  text_disabled: palette.grey,
  text_error: palette.error,
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
  codeLab: {
    default: '#FFFFFF',
    action: '#4EBD64',
    sensor: '#B55ADA',
    control: '#EE4444',
    data: '#273C4A'
  },
  footer: {
    background: palette.primary
  }
}
