
import { Metrics, Fonts, Colors } from 'App/Themes'

const styles = {
  view: {
    width: '100%'
  },
  button: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    borderRadius: Metrics.unit,
    paddingHorizontal: 0
  },
  text: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.medium,
    color: Colors.primaryDark
  }
}

export default styles

export const stylesLight = {
  view: {
    ...styles.view
  },
  button: {
    ...styles.button,
    borderColor: Colors.white
  },
  text: {
    ...styles.text,
    color: Colors.white
  }
}

export const stylesPrimary = {
  view: {
    ...styles.view
  },
  button: {
    ...styles.button,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary
  },
  text: {
    ...styles.text,
    color: Colors.white
  }
}
