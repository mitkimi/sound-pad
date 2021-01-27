import { mergeDataToLocal } from '@/utilitys'
import ModeSelector from './components/modeSelector'
import PerformanceName from './components/performanceName'
import TimeControl from './components/timeControl'
import SoundPlayer from './components/soundPlayer'
import PerformanceList from './components/performanceList'
import PerformancePad from './components/performancePad'

export default {
  components: {
    ModeSelector,
    PerformanceName,
    TimeControl,
    SoundPlayer,
    PerformanceList,
    PerformancePad
  },
  data () {
    return {
      performance: {},
      timer: null
    }
  },
  computed: {
    activeListItem () {
      return this.$store.state.main.activeListItem || 0
    }
  },
  created () {
    const buffer = localStorage.current
    if (!buffer || buffer.length <= 0) {
      this.$router.push({
        path: '/welcome'
      })
    }
  },
  mounted () {
    this.init()
    clearInterval(this.timer)
    // this.timer = setInterval(() => {
    //   this.saveToLocal()
    //   // this.$Message.success('已保存进缓存')
    // }, 1000 * 5)
  },
  methods: {
    init () {
      // 初始化
      this.loadData()
    },
    loadData () {
      // 加载本地数据
      try {
        const data = JSON.parse(localStorage.current)
        this.performance = data
        console.log('data', data)
      } catch (e) {
        this.$router.push({
          path: '/welcome'
        })
        localStorage.current = null
      }
    },
    saveToLocal () {
      mergeDataToLocal(this.performance, 'current')
    }
  }
}
