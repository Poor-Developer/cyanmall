<template>
  <div>
    <swiper>
      <swiper-item v-for="item in swiperList" :key="item.id">
        <a href="#">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>  
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'

export default {
  name: 'homeSwiper',
  props: {
    swiperList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>