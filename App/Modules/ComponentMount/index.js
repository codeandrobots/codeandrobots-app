export default async function componentDidMount (component) {
  component._isMounted = true
  const { image } = component.props
  if (image && image.uri) {
    const { width, height } = await component.getImageSize(image.uri)
    if (component._isMounted) {
      component.setState({ imageWidth: width, imageHeight: height })
    }
  }
}

export const componentWillMount = (component) => {
  component._isMounted = false
}
