
import { Alert } from 'react-native'

export const notPossibleInSimulator = () => {
  Alert.alert('Whoops', 'Not possible inside a simulator', [
    { text: 'Ok', onPress: () => {} }
  ])
}
