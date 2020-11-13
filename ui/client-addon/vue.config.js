const { clientAddonConfig } = require('appcd-ui')

module.exports = {
  ...clientAddonConfig({
    id: 'appcd-titanium',
    port: 8043,
  })
}