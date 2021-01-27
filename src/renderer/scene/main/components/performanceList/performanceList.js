import { defaultListItem } from '@/data/default'

export default {
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      // isModifying: -1
      // active: 0 // 当前高亮
      // mode: 'performance' // 当前模式
    }
  },
  computed: {
    active () {
      return this.$store.state.main.activeListItem
    },
    mode () {
      return this.$store.state.system.mode
    },
    isModifying () {
      return this.$store.state.system.isModifying
    }
  },
  mounted () {
    // console.log('list', this.list)
  },
  methods: {
    handleSelectListItem (index) {
      // 选择当前的节目
      this.$store.dispatch('SELECT_LIST_ITEM', { listItemId: index }) // 存进vuex
    },
    handelAddToList () {
      // 新增一个
      this.list.push(defaultListItem)
      console.log(defaultListItem)
    },
    handleModifyName (id) {
      this.$store.dispatch('SET_MODIFYING_ACTION', { isModifying: id }) // 存进vuex
    },
    handleBlurInput () {
      this.$store.dispatch('SET_MODIFYING_ACTION', { isModifying: null }) // 存进vuex
    },
    handleMoveTrash (id) {
      // 删除一个
      console.log('要删除的 id', id)
      let index = null
      let name = null
      for (let i = 0; i < this.list.length; i += 1) {
        const item = this.list[i]
        if (item.id === id) {
          index = i
          name = item.name
        }
      }
      if (index) {
        this.$Modal.confirm({
          title: '确认',
          content: `删除节目：${name || '[空白]'}吗？`,
          onOk: () => {
            this.list.splice(index, 1)
          }
        })
      }
    }
  }
}
