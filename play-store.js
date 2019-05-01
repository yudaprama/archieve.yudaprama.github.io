const gplay = require('google-play-scraper');
const fs = require("fs");
const https = require("https");

const appIds = ['com.yudapramadjunaedi.authorized','com.yuda.spss','com.yuda.stata','com.yudaprama.fifteenpuzzle','com.yuda.movie','com.yudaprama.candycrush','com.yudaprama.cryptoexplorer','com.yudapramadjunaedi.coin','com.yudaprama.tetris_pro','com.yudaprama.sensor','com.yuda.cetak'];

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
  fs.writeFile('data/PlayStore.json', JSON.stringify(allData), 'utf8', () => {});
}

https.get('https://itunes.apple.com/lookup?id=1165337910&entity=software', function(res){
  let body = ""

  res.on('data', function(chunk){
    body += chunk;
  });

  res.on('end', function(){
    fs.writeFile('data/AppStore.json', body, 'utf8', () => {});
  });
}).on('error', function(e){
  console.log("Got an error: ", e);
});

run()