import TitaniumView from './components/TitaniumView'

ClientAddonApi.addRoutes('com.axway.titanium', [
  {
    path: '',
    name: 'com.axway.titanium.routes.index',
    component: TitaniumView
  }
])
