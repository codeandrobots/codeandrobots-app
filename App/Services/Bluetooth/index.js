
import { isSimulator } from 'App/Services/Properties'

import { default as BluetoothDefault } from './Default'
import { default as BluetoothSimulator } from './Simulator'

export default (isSimulator()) ? {...BluetoothSimulator} : {...BluetoothDefault}
