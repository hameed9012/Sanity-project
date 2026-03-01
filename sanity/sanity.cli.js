import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'lwftbq20',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: false,
    appId: 'fq6t2ivc1hc5mkpmhmyuhzxw',
  }
})