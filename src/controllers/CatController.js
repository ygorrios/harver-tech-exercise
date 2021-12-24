const CatService = require('../services/CatService')
const ResponseHelper = require('../helpers/ResponseHelper')

const catCreateController = async (req, res) => {
  try {
    const {
      catDetails,
    } = req.body

    let msgError = ''
    if (!catDetails) {
      msgError = 'catDetails'
    } else if (catDetails.find((item) => !item.text)) {
      msgError = 'text'
    }
    if (msgError) {
      return ResponseHelper.errorDataRequest(res, `'${msgError}' is required`)
    }

    await CatService.generateCatImagesService(catDetails, ResponseHelper.successResponse(res, 'Cat Images was successfully generated'))
  } catch (error) {
    return ResponseHelper.internalErrorResponse(res, error.message)
  }
}

exports.catCreateController = catCreateController
