import fs from 'fs'
const UUID = require('uuid-js')
export default {
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    },
    activeListItem: {
      type: Number
    }
  },
  data () {
    return {
      drawerShow: false,
      file: null, // 用来试听的 bolb 文件
      style: {}, // 临时修改的样式
      form: {
        name: '',
        file: '',
        duration: 0,
        in: 0,
        out: 0,
        loop: false,
        track: 0, // 播放音轨：主音轨-0，从音轨-1
        volume: 100,
        playNow: true,
        remark: null
      }
    }
  },
  computed: {
    mode () {
      return this.$store.state.system.mode
    },
    current () {
      return this.$store.state.player.current
    }
  },
  watch: {
    current () {
      if (this.current.id === this.form.id) {
        console.log(this.current.id)
        console.log(this.form.id)
        this.style = {
          background: '#19be6b',
          color: '#f8f8f9'
        }
      } else {
        this.style = {}
      }
    }
  },
  mounted () {
    if (this.item) {
      this.form = this.item
      this.fileBuffer(this.item.file)
    }
  },
  methods: {
    handleWhenDrawerClose () {
      this.$refs.audioListen.pause()
      this.$refs.audioListen.load()
    },
    loadFile () {
      const selectedFile = this.$refs.file.files[0]
      const file = `${selectedFile.path}`
      this.form.file = file
      this.fileBuffer(file)
    },
    fileBuffer (file) {
      // 读取文件给播放器播放
      const buf = fs.readFileSync(file)
      const uint8Buffer = Uint8Array.from(buf)
      const bolb = new Blob([uint8Buffer])
      this.file = window.URL.createObjectURL(bolb)
    },
    handlePadClick () {
      // 点击按钮
      if (this.mode === 'modify') {
        // 弹出编辑框
        this.drawerShow = true
        // ... 没写：高亮
      }
      if (this.mode === 'performance' && this.item.name) {
        // 开始播放
        const current = JSON.parse(JSON.stringify(this.form))
        current.timestamp = new Date() * 1
        this.$store.dispatch('PLAY_CURRENT_ACTION', { current }) // 存进vuex
      }
    },
    handleOk () {
      this.form.duration = parseInt(this.$refs.audioListen.duration)
      this.form.id = UUID.create().toString()
      this.drawerShow = false
      this.handleWhenDrawerClose()
    },
    second2time (inTime) {
      const hasHour = inTime >= 3600
      let ss = inTime % 60 // 获取秒位
      inTime -= ss
      inTime /= 60
      ss = ss < 10 ? `0${ss}` : `${ss}`
      let mm = inTime % 60 // 获取分位
      mm = mm < 10 ? `0${mm}` : `${mm}`
      inTime -= mm
      inTime /= 60
      let hh = inTime % 60 // 获取小时位
      return hasHour ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`
    }
  }
}
