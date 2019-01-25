
import detox from 'detox'
import { detox as detoxConfig } from '../../package.json'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000
beforeAll(async () => {
  await detox.init(detoxConfig)
})
beforeEach(async () => {
  await device.reloadReactNative()
})
afterAll(async () => {
  await detox.cleanup()
})
