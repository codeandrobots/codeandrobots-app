import RNImagePicker from 'react-native-image-picker'

import { captureException } from '../CrashReporting'

const CLOUDINARY_NAME = 'code-and-robots'
const CLOUDINARY_PRESET = 'fdlhzv7x'

class ImagePicker {
  constructor ({ onPick, onUpload }) {
    this._onPickHandler = onPick || (() => {})
    this._onUploadHandler = onUpload || (() => {})
  }

  open () {
    const options = {
      title: 'Select Avatar',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: true
      },
      allowsEditing: true,
      cameraType: 'front',
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.7
    }

    RNImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        // User cancelled image picker
      } else if (response.error) {
        // response.error
      } else if (response.customButton) {
        // response.customButton
      } else {
        if (this._onPickHandler(response) !== false) {
          const uri = response.uri
          const type = response.type
          const name = response.fileName
          const source = {
            uri,
            type,
            name
          }
          this.cloudinaryUpload(source)
        }
      }
    })
  }

  cloudinaryUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', `${CLOUDINARY_PRESET}`)
    data.append('cloud_name', `${CLOUDINARY_NAME}`)
    fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`, {
      method: 'post',
      body: data
    })
      .then(res => res.json())
      .then(data => {
        this._onUploadHandler(data.secure_url)
      }
      ).catch(e => {
        captureException(e.message, e)
      })
  }
}

export default ImagePicker
