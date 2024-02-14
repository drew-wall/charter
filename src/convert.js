// Description:
// You are given a JSON file named 'map.json' containing an array of objects representing
// store IDs and their corresponding device IDs. Each store ID and device ID have a
// one-to-one relationship. Your task is to implement two functions:
//   1. convertStoreIdToDeviceId(storeId): This function should take a store ID as input and
//   return the corresponding device ID.
//   2. convertDeviceIdToStoreId(deviceId): This function should take a device ID as input and
//   return the corresponding store ID.

const fs = require('fs')

let store
try {
  const data = fs.readFileSync('./src/map.json', 'utf-8')
  store = JSON.parse(data)
}
catch (e) {
  console.log(e) 
}

const hm = store?.reduce((acc, val) => {
  acc[val.deviceId] = val.storeId
  acc[val.storeId] = val.deviceId
  return acc
}, {})

const convertStoreIdToDeviceId = (storeId) => {
  const res = store?.find(x => x.storeId === storeId)
  return res ? res.deviceId : null
}

const convertDeviceIdToStoreId = (deviceId) => {
  const res = store?.find(x => x.deviceId === deviceId)
  return res ? res.storeId : null
}

const convert = id => {
  return hm[id]
}

console.log(convertStoreIdToDeviceId("1024"))
console.log(convertDeviceIdToStoreId("973497584"))
console.log(convert("1026"))