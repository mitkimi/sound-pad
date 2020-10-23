export default {
  props: {
    mode: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      bufferMode: null,
      modalShow: false
    }
  },
  methods: {
    handleOk () {},
    handleCancel () {},
    handleShowModal () {
      this.modalShow = true
    }
  }
}
