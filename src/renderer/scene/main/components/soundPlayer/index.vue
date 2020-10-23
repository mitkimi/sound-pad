<template>
  <div class="component">
    <div class="play-progress">
      <div class="progress-box">
        <div class="played-progress" :style="{ width: calcPlayedPercent() + '%' }">
          <!-- <span class="progress" v-if="calcPlayedPercent() > 0.05">{{parseInt(calcPlayedPercent())}}%</span> -->
        </div>
      </div>
    </div>
    <div class="controller">
      <div class="control-item control-button" v-if="!player.isPlaying" @click="handlePlayToggle">
        <Icon type="md-play" />
      </div>
      <div class="control-item control-button active" v-else @click="handlePlayToggle">
        <Icon type="md-pause" />
      </div>
      <div class="control-item control-button">
        <Icon type="md-square" />
      </div>
      <div class="control-item control-button active" v-if="player.isLoop" @click="handleLoopToggle">
        <Icon type="md-infinite" />
      </div>
      <div class="control-item control-button" v-else @click="handleLoopToggle">
        <Icon type="md-infinite" />
      </div>
      <div class="control-item sound-info">
        <div class="tips">正在播放</div>
        <div class="info">暖场音乐：Moment Scale [Remix] 标准音质 - Slient Poets.mp3</div>
      </div>
      <div class="control-item sound-time">
        {{second2time(player.at)}}/{{second2time(player.duration)}}
      </div>
      <div class="control-item sound-volume">
        <div class="tips">总音量：{{player.volumn}}%</div>
        <Slider v-model="player.volumn"></Slider>
      </div>
    </div>
  </div>
</template>
<script src="./soundPlayer.js"></script>
<style lang="less" src="./soundPlayer.less" scoped></style>
