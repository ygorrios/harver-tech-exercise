const { join } = require('path')
const { writeFile } = require('fs')
const blend = require('@mapbox/blend')
const RequestHelper = require('../helpers/RequestHelper')
const Util = require('../utils')

const generateCatImagesService = async (catDetails, callback) => {
  const mergedCatDetails = Util.mergeCatDetails(catDetails)
  const firstCatBinary = await RequestHelper.getCat(mergedCatDetails[0])
  const secondCatBinary = await RequestHelper.getCat(mergedCatDetails[1])

  blend([{
    buffer: new Buffer.from(firstCatBinary, 'binary'),
    x: 0,
    y: 0,
  }, {
    buffer: new Buffer.from(secondCatBinary, 'binary'),
    x: mergedCatDetails[0].width,
    y: 0,
  }], {
    width: mergedCatDetails[0].width * 2,
    height: mergedCatDetails[0].height,
    format: 'jpeg',
  }, (err, data) => {
    const fileOut = join(process.cwd(), '/cat-card.jpg')
    writeFile(fileOut, data, 'binary', (err) => {
      if (err) {
        console.log(err)
        return
      }
      return callback
    })
  })
}

exports.generateCatImagesService = generateCatImagesService
