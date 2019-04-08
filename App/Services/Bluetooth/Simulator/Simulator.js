
export default class Simulator {
  enabled = false
  connectedDevice = null

  devices = [
    {
      id: '1',
      name: 'HC-06'
    },
    {
      id: '2',
      name: 'Laptop'
    }
  ]

  unpairedDevices = [
    {
      id: '3',
      name: 'Echo'
    }
  ]
}
