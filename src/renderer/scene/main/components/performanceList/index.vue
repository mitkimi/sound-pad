<template>
  <div class="component">
    <div class="list">
      <div class="list-item" v-for="(item, index) in 6" :key="index">
        <div class="item active" v-if="active === index">
          暖场
        </div>
        <div class="item inactive" v-else>
          暖场
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./performanceList.js"></script>
<style lang="less" src="./performanceList.less" scoped></style>
