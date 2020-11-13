const AppcdClient = require('appcd-client').default

const VERSION = require('../../package.json').version
const withBase = (pathname) => {
  return `/titanium/${VERSION}/${pathname}`;
}
const client = new AppcdClient()

function get (url) {
  return new Promise((resolve, reject) => {
    client.request(url)
      .once('response', data => {
        resolve(data)
      })
      .once('error', reject)
  })
}

async function list () {
  const data = await get(withBase('sdk/list'))
  return data.reverse()
}

module.exports = {
  list
}