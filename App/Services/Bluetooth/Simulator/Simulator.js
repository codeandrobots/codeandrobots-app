
export default class Simulator {
  enabled = false
  connectedDevice = null

  devices = [
    {
      id: '1',
      name: 'Otto'
    },
    {
      id: '2',
      name: 'Nybble'
    },
    {
      id: '3',
      name: 'Laptop'
    }
  ]

  unpairedDevices = [
    {
      id: '4',
      name: 'Echo'
    }
  ]
}
