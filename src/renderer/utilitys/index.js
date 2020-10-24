function mergeDataToLocal (data, key) {
  localStorage[key] = JSON.stringify(data)
}

module.exports = {
  mergeDataToLocal
}
