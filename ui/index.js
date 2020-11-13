const path = require('path')

const schema = require('./schema')

module.exports = api => {
  if (process.env.APPCD_UI_DEV) {
    api.addClientAddon({
      id: 'com.axway.titanium.client-addon',
      url: 'http://localhost:8043/index.js',
    })
  } else {
    api.addClientAddon({
      id: 'com.axway.titanium.client-addon',
      path: path.resolve(__dirname, './client-addon/dist'),
    })
  }

  api.addView({
    id: 'com.axway.titanium.views.overview',
    name: 'com.axway.titanium.routes.index',
    icon: 'mdi-cellphone',
    title: 'Titanium SDK',
    group: 'global'
  })

  api.addSchema(schema)
}
