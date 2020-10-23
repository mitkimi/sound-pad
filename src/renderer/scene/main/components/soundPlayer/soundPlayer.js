export default {
  data () {
    return {
      player: {
        at: 120,
        duration: 225,
        volumn: 80,
        isPlaying: false,
        isLoop: false
      }
    }
  },
  methods: {
    calcPlayedPercent () {
      const at = this.player.at
      const duration = this.player.duration
      return (at / duration) * 100
    },
    handleLoopToggle () {
      this.player.isLoop = !this.player.isLoop
    },
    handlePlayToggle () {
      this.player.isPlaying = !this.player.isPlaying
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
