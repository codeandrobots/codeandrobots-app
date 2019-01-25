
describe('LaunchScreen', () => {
  it('Screen should be visible', async () => {
    await expect(element(by.id('DevLaunchScreen'))).toBeVisible()
  })
})
