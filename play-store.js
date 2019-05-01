const gplay = require('google-play-scraper');
const fs = require("fs");

const appIds = ['com.yuda.spss','com.yuda.stata'];

async function getAppdata(appId) {
  return await gplay.app({ appId: appId });
}

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function run() {
  let allData = [];
  await asyncForEach(appIds, async (appId) => {
    let data = await getAppdata(appId)
    allData.push(data)
  })
  fs.writeFile('PlayStore.json', JSON.stringify(allData), 'utf8', () => {});
}

run()