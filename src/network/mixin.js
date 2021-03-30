export const toTop = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    scrollPos(pos) {
      this.isShowBackTop = (-pos.y) > 500;
    },
    scrollToTop() {
      this.$refs.scroll.scrollToTop(0, 0);
    },
  }
}