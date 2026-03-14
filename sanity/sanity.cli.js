import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '20d53wo5',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: false,
    appId: '',
  }
})
