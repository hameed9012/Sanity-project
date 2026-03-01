import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'lwftbq20',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: false,
  }
})