<template>
  <div class="scene">
    <div class="header">
      <div class="logo">
        <img src="@/assets/SOUNDPAD.png" />
      </div>
      <div class="system">
        <mode-selector :mode="'performing'"></mode-selector>
      </div>
    </div>
    <div class="name-time">
      <performance-name></performance-name>
      <time-control></time-control>
    </div>
    <div class="sound-player">
      <sound-player></sound-player>
    </div>
  </div>
</template>
<script src="./main.js"></script>
<style lang="less" src="./main.less" scoped></style>
