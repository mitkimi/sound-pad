export default {
  data () {
    return {
      time: '00:00:00'
    }
  },
  mounted () {
    this.getCurrentTime()
    setInterval(() => {
      this.getCurrentTime()
    }, 200)
  },
  methods: {
    getCurrentTime () {
      const current = new Date()
      const HH = current.getHours()
      const MM = current.getMinutes()
      const SS = current.getSeconds()
      const time = `${HH < 10 ? '0' + HH : HH}:${MM < 10 ? '0' + MM : MM}:${SS < 10 ? '0' + SS : SS}`
      this.time = time
    }
  }
}
