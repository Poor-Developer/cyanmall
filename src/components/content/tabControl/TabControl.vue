<template>
  <ul class="tabControl">
    <li v-for="(item, index) in titles" 
        :key="item" 
        :class="{selectStyle: index === currIndex}"
        @click="itemClick(index)"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      if (this.currIndex === index) {
        return
      }
      this.currIndex = index;
      this.$emit("tabClick", index);
    }
  }
}
</script>

<style lang="less" scoped>
.tabControl{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  position: sticky;
  background-color: #fff;
  top: 40px;
  li{
    padding: 4px;
  }
  .selectStyle{
    color: #0ff;
    border-bottom: 2px solid #0ff;
  }
}
</style>