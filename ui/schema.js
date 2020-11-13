const gql = require('graphql-tag')
const sdk = require('./connectors/sdk')

const types = gql`
type SdkInstall {
  name: String
  path: String
  manifest: SdkManifest
}

type SdkManifest {
  name: String
  version: String
  timestamp: String
  githash: String
  moduleAPIVersion: ModuleApiVersion
  platforms: [String]
}

type ModuleApiVersion {
  android: String
  iphone: String
}

extend type Query {
  installed: [SdkInstall]
}
`

const resolvers = {
  Query: {
    installed: () => sdk.list()
  }
}

module.exports = {
  types,
  resolvers
}
