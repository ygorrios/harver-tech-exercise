const successResponse = (res, msg, obj) => {
  if (obj) {
    return res.status(200).json({
      status: 1,
      message: msg,
      data: obj.data ? obj.data : obj,
    })
  }
  return res.status(200).json({
    status: 1,
    message: msg,
  })
}

const internalErrorResponse = (res, msg) => {
  const data = {
    status: 0,
    message: msg,
  }
  return res.status(500).json(data)
}

const errorDataRequest = (res, msg, obj) => {
  const resData = {
    status: 0,
    message: msg,
    data: obj,
  }
  return res.status(400).json(resData)
}

exports.successResponse = successResponse
exports.internalErrorResponse = internalErrorResponse
exports.errorDataRequest = errorDataRequest
