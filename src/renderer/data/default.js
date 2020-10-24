const UUID = require('uuid-js')
const uuidv4 = UUID.create()
const currentTime = new Date()
// 默认数据模板（存文件前的数据）
const defaultDataTemplate = {
  name: '',
  createAt: currentTime,
  list: []
}

// 默认节目模板
const performaceListTemplate = {
  id: uuidv4.toString(),
  name: '',
  children: []
}

const performancePadTemplate = {
  id: uuidv4.toString(),
  name: '',
  file: null,
  duration: 0,
  in: 0,
  out: 0,
  loop: false,
  track: 0, // 播放音轨：主音轨-0，从音轨-1
  volume: 100,
  remark: ''
}

function makeDefaultData () {
  const performanceList = JSON.parse(JSON.stringify(performaceListTemplate))
  for (let i = 0; i < 20; i += 1) {
    const performancePad = JSON.parse(JSON.stringify(performancePadTemplate))
    performanceList.children.push(performancePad)
  }
  const defaultData = JSON.parse(JSON.stringify(defaultDataTemplate))
  defaultData.list.push(performanceList)
  return defaultData
}

const defaultData = makeDefaultData()

function makeListItem () {
  const performanceList = JSON.parse(JSON.stringify(performaceListTemplate))
  for (let i = 0; i < 20; i += 1) {
    const performancePad = JSON.parse(JSON.stringify(performancePadTemplate))
    performanceList.children.push(performancePad)
  }
  return performanceList
}

const defaultListItem = makeListItem()

module.exports = {
  defaultData,
  defaultListItem
}
