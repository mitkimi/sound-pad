import { defaultData } from '@/data/default'
import { version, versionName } from '@/data/make'
export default {
  data () {
    return {
      loading: false,
      version,
      versionName,
      name: '',
      choose: null
    }
  },
  mounted () {
  },
  methods: {
    handleChooseButton (button) {
      this.choose = button
    },
    handleCreateOk () {
      // 点击ok按钮
      this.loading = true
      const name = this.name
      if (!name) {
        this.loading = false
        this.$Message.warning('需要给节目单设置名称，请先取一个名字吧～')
        return
      }
      console.log(name)
      const data = JSON.parse(JSON.stringify(defaultData))
      data.name = name
      localStorage.current = JSON.stringify(data)
      this.$Notice.success({
        title: '新节目单已创建',
        desc: '请开始编排节目吧～您的编排将每分钟缓存一次到本地。编排结束后，记得保存文件～'
      })
      setTimeout(() => {
        this.$router.push({
          path: '/'
        })
      }, 500)
    }
  }
}
