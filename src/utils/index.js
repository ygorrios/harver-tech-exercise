const lodash = require('lodash')

const catDefaultDetails = {
  url: 'https://cataas.com/cat/says',
  width: 400,
  height: 500,
  color: 'Pink',
  size: 100,
}

const mergeCatDetails = (catDetails) => {
  if (lodash.isArray(catDetails)) {
    return catDetails.map((catDetail) => lodash.merge({}, catDefaultDetails, catDetail))
  }
  return [lodash.merge({}, catDefaultDetails, catDetails)]
}

exports.mergeCatDetails = mergeCatDetails
