export default {
  // props: {
  //   mode: {
  //     type: String,
  //     required: true
  //   }
  // },
  data () {
    return {
      // mode: null,
      bufferMode: null,
      modalShow: false
    }
  },
  mounted () {
    console.log('this.$store.state.system', this.$store.state.system.mode)
  },
  computed: {
    mode () {
      return this.$store.state.system.mode
    }
  },
  methods: {
    handleOk () {
      const buffer = this.bufferMode
      this.bufferMode = null
      this.saveToLocal(buffer)
      this.modalShow = false
    },
    handleCancel () {
      this.bufferMode = null
      this.modalShow = false
    },
    handleShowModal () {
      this.modalShow = true
    },
    saveToLocal (mode) {
      // SELECT_MODE
      localStorage.mode = mode // 存进本地存储
      this.$store.dispatch('SELECT_MODE_ACTION', { mode }) // 存进vuex
    }
  }
}
