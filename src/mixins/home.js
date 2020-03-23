export default {
  data () {
    return {
    }
  },

  methods: {
    showModal (data) {
      this.$refs[data].show()
    },
    hideModal (data) {
      this.$refs[data].hide()
    }
  }
}
