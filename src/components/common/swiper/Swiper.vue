<template>
  <div class="swiper-box">
    <ul class="swiperul" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </ul>

    <!-- <div v-if="showIndicator && slideCount > 1">
      <slot name="indicator"></slot>
    </div> -->
  </div>
</template>

<script>

export default {
  name: "swiper",
  props: {
    swiperList: {
      type: Array,
      default() {
        return []
      }
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    slideProp: {
      type: Number,
      default: 0.25
    },
    intervalTime: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      slideCount: 0,
      currIndex: 0,
      startX: 0,
      moveX: 0,
      winWidth: 0,
      timer: null
    }
  },
  mounted() {
    this.winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setTimeout(() => {
      let lis = document.getElementsByClassName("swiperul")[0].children;
      this.slideCount = lis.length;
      this.setImgSlide();
    }, 200);
  },
  methods: {
    touchStart(e) {
      this.clearImgSlide();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      let currX = e.touches[0].pageX;
      this.moveX = currX - this.startX;
      let relaX = this.moveX - this.winWidth * this.currIndex;
      let ul = document.getElementsByClassName("swiperul")[0];
      ul.style.transform = `translateX(${relaX}px)`;
    },
    touchEnd() {
      let index = 0;
      let relaX = Math.abs(this.moveX) - this.winWidth*this.slideProp;
      if (relaX > 0) {
        index = this.moveX > 0 ? -1 : 1;
      }

      this.currIndex += index;
      this.setFinalPosi();
      this.setImgSlide();
    },
    setFinalPosi() {
      if (this.currIndex > (this.slideCount - 1)) {
        this.currIndex = 0;
      }
      let ul = document.getElementsByClassName("swiperul")[0];
      let relaX = - this.winWidth * this.currIndex;
      ul.style.transform = `translateX(${relaX}px)`;
    },
    setImgSlide() {
      this.timer = setInterval(() =>{
        this.currIndex = this.currIndex + 1;
        this.setFinalPosi();
      }, this.intervalTime)
    },
    clearImgSlide() {
      clearInterval(this.timer);
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-box{
  height: 100%;
  position: relative;
  overflow: hidden;
  .swiperul{
    height: 100%;
    display: flex;
  }
}

</style>