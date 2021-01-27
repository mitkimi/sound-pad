<template>
  <div class="component">
    <div class="play-progress">
      <div class="wave-box">
        <div id="waveform" ref="waveform"></div>
      </div>
      <!-- cover 是挡住控制拖动的，在演出模式下不能直接拖动播放 -->
      <div class="cover" v-if="mode === 'performance'"></div>
      <!-- <div class="progress-box">
        <div class="played-progress" :style="{ width: calcPlayedPercent() + '%' }">
          <span class="progress" v-if="calcPlayedPercent() > 0.05">{{parseInt(calcPlayedPercent())}}%</span>
        </div>
      </div> -->
    </div>
    <div class="controller">
      <div class="control-item control-button" v-if="!player.isPlaying" @click="handlePlayToggle">
        <Icon type="md-play" />
      </div>
      <div class="control-item control-button" v-else @click="handlePlayToggle">
        <Icon type="md-pause" />
      </div>
      <div class="control-item control-button" @click="handleStop">
        <Icon type="md-square" />
      </div>
      <div class="control-item control-button active" v-if="player.isLoop" @click="handleLoopToggle">
        <Icon type="md-infinite" />
      </div>
      <div class="control-item control-button" v-else @click="handleLoopToggle">
        <Icon type="md-infinite" />
      </div>
      <div class="control-item sound-info">
        <div class="tips"><span v-if="player.isPlaying">正在播放</span><span v-else>已暂停</span></div>
        <div class="info">{{current.name}}</div>
      </div>
      <div class="control-item sound-time">
        {{second2time(player.at)}}/{{second2time(player.duration)}}
      </div>
      <div class="control-item sound-volume">
        <div class="tips">音量：{{player.volume}}%</div>
        <Slider v-model="player.volume"></Slider>
      </div>
    </div>
  </div>
</template>
<script src="./soundPlayer.js"></script>
<style lang="less" src="./soundPlayer.less" scoped></style>
