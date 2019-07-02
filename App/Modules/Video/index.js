export const onVideoToggle = (obj) => {
  const { paused } = obj.state
  obj.setState({paused: !paused})
}

export const onVideoEnd = (obj) => {
  obj.setState({paused: true}, () => {
    obj.player.seek(0)
  })
}

export const onVideoError = (e) => {
  console.log(e)
}
