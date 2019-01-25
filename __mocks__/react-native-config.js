// Mock react-native-config, used by jest
// Reads .env.test properties and converts them into a mock object
import PropertiesReader from 'properties-reader'

const path = require('path')
const properties = PropertiesReader(path.join(__dirname, '/../.env.test'))

export default properties.getAllProperties()
