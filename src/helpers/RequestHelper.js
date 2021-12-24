const axios = require('axios')

const getCat = async (obj) => {
  try {
    const { url, width, height, color, size, text } = obj

    const result = await axios.get(`${url}/${text}`, {
      params: { width, height, c: color, s: size }, responseType: 'arraybuffer',
      responseEncoding: 'binary'
    })
    if (result?.data) {
      return result.data
    }
    return null
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

exports.getCat = getCat
