import { setting } from './default'
const { shell } = require('electron')

export default {
  data () {
    return {
      searchKeyword: '',
      setting
    }
  },
  mounted () {
    console.log('a', this.setting)
  },
  methods: {
    handleBack () {
      this.$router.push({
        path: '/'
      })
    },
    windowOpen (url) {
      // 打开网站
      shell.openExternal(url)
    },
    handleSwitchToggle () {
      // 开关处理
    }
  }
}
