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
      form: {
        name: '',
        file: 'https://admusic.oss-cn-beijing.aliyuncs.com/lovesong-adele.mp3',
        duration: 0,
        in: 0,
        out: 0,
        loop: false,
        track: 0, // 播放音轨：主音轨-0，从音轨-1
        volume: 100,
        remark: null
      }
    }
  },
  computed: {
    mode () {
      return this.$store.state.system.mode
    }
  },
  methods: {
    handlePadClick () {
      // 点击按钮
      if (this.mode === 'modify') {
        // 弹出编辑框
        this.drawerShow = true
        // ... 没写：高亮
      }
      if (this.mode === 'performance') {
        // 开始播放
      }
    },
    handleOk () {
      const form = JSON.parse(JSON.stringify(this.form))
      this.$emit('setPad', this.activeListItem, this.index, form)
      this.drawerShow = false
    }
  }
}
