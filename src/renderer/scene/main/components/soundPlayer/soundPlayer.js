import WaveSurfer from 'wavesurfer.js'
import fs from 'fs'
// import path from 'path'
// import { remote } from 'electron'
// import  * as mm from 'music-metadata'
require('abortcontroller-polyfill/dist/polyfill-patch-fetch')
export default {
  data () {
    return {
      wavesurfer: null,
      player: {
        file: '',
        at: 0,
        duration: 0,
        volume: 80,
        isPlaying: false,
        isLoop: false
      },
      current: {
        file: null,
        in: 0,
        loop: false,
        name: null,
        out: 0,
        remark: null,
        track: 0,
        volume: 100
      }
    }
  },
  computed: {
    mode () {
      return this.$store.state.system.mode
    },
    nextSoundObj () {
      return this.$store.state.player.current
    }
  },
  watch: {
    nextSoundObj (buffer) {
      console.log('buffer', buffer)
      this.LoadCurrentSound(buffer)
    }
  },
  mounted () {
    const buffer = {
      file: null,
      name: ''
    }
    this.LoadCurrentSound(buffer, true)
  },
  methods: {
    LoadCurrentSound (buffer, inner) {
      this.current = buffer
      if (this.wavesurfer) {
        this.wavesurfer.destroy()
        this.player.isLoop = false
        this.player.isPlaying = false
      }
      this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveform,
        height: 30,
        barWidth: 2,
        barHeight: 1,
        barGap: 1,
        barRadius: 2,
        waveColor: '#808695',
        progressColor: '#19be6b',
        backend: 'MediaElement',
        mediaControls: false,
        audioRate: '1'
      })
      // 设置循环播放
      this.player.isLoop = buffer.loop
      this.wavesurfer.cancelAjax()
      // 读取文件
      const buf = fs.readFileSync(this.current.file)
      const uint8Buffer = Uint8Array.from(buf)
      const blob = new Blob([uint8Buffer])
      this.wavesurfer.load(window.URL.createObjectURL(blob))
      this.wavesurfer.on('ready', () => {
        const duration = parseInt(this.wavesurfer.getDuration())
        this.player.duration = duration
      })
      // 监听当前的时间
      this.wavesurfer.on('audioprocess', () => {
        const currentTime = this.wavesurfer.getCurrentTime()
        this.player.at = parseInt(currentTime)
      })
      // 监听播放结束
      this.wavesurfer.on('finish', () => {
        this.player.isPlaying = false
        if (this.player.isLoop) {
          // 开启了循环播放
          this.handlePlayToggle()
        }
      })
      // 设置自动播放
      if (buffer.playNow) {
        this.handlePlayToggle()
      }
    },
    calcPlayedPercent () {
      const at = this.player.at
      const duration = this.player.duration
      return (at / duration) * 100
    },
    handleLoopToggle () {
      this.player.isLoop = !this.player.isLoop
    },
    handlePlayToggle () {
      // 渐出
      // some codes
      // 渐入
      // some codes
      this.player.isPlaying = !this.player.isPlaying
      this.wavesurfer.playPause.bind(this.wavesurfer)()
    },
    handleStop () {
      this.wavesurfer.stop()
      this.player.isPlaying = false
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
