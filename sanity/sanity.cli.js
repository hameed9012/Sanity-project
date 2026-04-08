import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '20d53wo5',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: false,
    appId: 's9q7hn5qo3lk4smgnk87vpe2',
  }
})
