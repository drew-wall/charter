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
  acc.deviceIds[val.deviceId] = val.storeId
  acc.storeIds[val.storeId] = val.deviceId
  return acc
}, { storeIds: {}, deviceIds: {} })

console.log(hm)


const convertStoreIdToDeviceId = (storeId) => {
  return hm.storeIds[storeId]
}

const convertDeviceIdToStoreId = (deviceId) => {
  return hm.deviceIds[deviceId]
}


console.log(convertStoreIdToDeviceId("1024"))
console.log(convertDeviceIdToStoreId("973497584"))
