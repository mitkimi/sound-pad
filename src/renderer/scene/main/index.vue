<template>
  <div class="scene">
    <div class="header">
      <div class="logo">
        <img src="@/assets/SOUNDPAD.png" />
        <router-link to="/setting">设置</router-link>
        <router-link to="/welcome">欢迎</router-link>
      </div>
      <div class="system">
        <mode-selector :mode="'performing'"></mode-selector>
      </div>
    </div>
    <div class="name-time">
      <performance-name :name="performance.name"></performance-name>
      <time-control></time-control>
    </div>
    <div class="sound-player">
      <sound-player></sound-player>
    </div>
    <div class="main-body">
      <div class="list-container">
        <performance-list :list="performance.list"></performance-list>
      </div>
      <div class="pad-container">
        <div class="pad-item" v-for="(item, index) in performance.list[activeListItem - 1].children" :key="index">
          <performance-pad :item="item" :index="index" :activeListItem="activeListItem"></performance-pad>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./main.js"></script>
<style lang="less" src="./main.less" scoped></style>
