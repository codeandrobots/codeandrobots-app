import {Image} from 'react-native'

import {Metrics} from 'App/Themes'

export const getImageSize = (imageUri) => {
  return new Promise((resolve, reject) => {
    Image.getSize(imageUri,
      (width, height) => {
        const maxWidth = Metrics.screenWidth - (Metrics.unit * 4)
        const size = (maxWidth < width)
          ? { width: maxWidth, height: height * (maxWidth / width) }
          : { width, height }
        resolve(size)
      },
      reject)
  })
}

export const scaleImageSize = (width, height, maxWidth, maxHeight) => {
  if (width > height) {
    return (maxWidth < width)
      ? { width: maxWidth, height: Math.floor(height * (maxWidth / width)) }
      : { width: width, height: height }
  } else {
    return (maxHeight < height)
      ? { width: Math.floor(width * (maxHeight / height)), height: maxHeight }
      : { width: width, height: height }
  }
}
