const { User } = require('../../models')
const path = require('path')
const fs = require('fs/promises')
const Jimp = require('jimp')

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user
  const { path: tempDir, originalname } = req.file
  const [extension] = originalname.split('.').reverse()

  await Jimp.read(tempDir)
    .then((avatar) => {
      return (
        avatar
          .contain(250, 250)
          .greyscale()
          .write(tempDir)
      )
    })
    .catch((error) => {
      console.error(error)
    })
  const filename = `${_id}.${extension}`
  const uploadDir = path.join(__dirname, '../../', 'public\\avatars', filename)
  try {
    await fs.rename(tempDir, uploadDir)
    const image = path.join('avatars', filename)
    await User.findByIdAndUpdate(_id, { avatarURL: image })

    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        image,
      },
    })
  } catch (error) {
    await fs.unlink(tempDir)
    next(error)
  }
}

module.exports = updateAvatar
