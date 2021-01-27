<template>
  <div class="component" ref="pad" @click="handlePadClick" :style="style">
    <div v-if="item.name">
      <div class="name">
        <div class="pop-handle"></div>
        {{item.name}}
        <span class="time">{{second2time(item.duration)}}</span>
      </div>
      <div style="clear: both;"></div>
      <div class="tags">
        <Tag v-if="item.in <= 0">立即进</Tag><Tag color="cyan" v-else>渐入{{item.in}}s</Tag>
        <Tag v-if="item.out <= 0">立即出</Tag><Tag color="cyan" v-else>渐出{{item.out}}s</Tag>
        <Tag color="gold" v-if="item.track === 0">主音轨</Tag><Tag color="blue" v-if="item.track === 1">从音轨</Tag>
      </div>
      <div class="remark">
        备注：{{item.remark}}
      </div>
    </div>
    <Drawer title="编辑音乐方块" width="400" :closable="false" v-model="drawerShow" @on-close="handleWhenDrawerClose">
      <Form :model="form" label-position="top">
        <FormItem label="方块名称">
          <Input v-model="form.name" placeholder="输入方块名称"></Input>
        </FormItem>
        <FormItem label="音频文件">
          <div v-if="form.file">
            试听：
            <audio controls="controls" ref="audioListen" :src="file"></audio>
          </div>
          <Button type="primary" @click="$refs.file.click()"><span v-if="form.file">重新</span>加载音乐</Button>
          <Alert v-if="!form.file">请先加载音频，仅支持mp3、ogg格式，本音频不上传。</Alert>
          <input type="file" id="file" ref="file" style="display: none;" @change="loadFile" />
        </FormItem>
        <FormItem label="渐入">
          <Input v-model="form.in" placeholder="渐入 x 秒，立即播放填写 0">
            <span slot="suffix" style="line-height: 30px">秒</span>
          </Input>
        </FormItem>
        <FormItem label="渐出">
          <Input v-model="form.out" placeholder="渐出 x 秒，立即播放填写 0">
            <span slot="suffix" style="line-height: 30px">秒</span>
          </Input>
        </FormItem>
        <FormItem label="循环">
          <i-switch v-model="form.loop"></i-switch>
        </FormItem>
        <FormItem label="按下 pad 立即播放">
          <i-switch v-model="form.playNow"></i-switch>
        </FormItem>
        <FormItem label="播放在">
          <Select v-model="form.track">
            <Option :value="0">主音轨</Option>
            <Option :value="1">从音轨</Option>
          </Select>
        </FormItem>
        <FormItem label="音量">
          <Slider v-model="form.volume" show-input></Slider>
        </FormItem>
        <FormItem label="备注">
          <Input v-model="form.remark" type="textarea"></Input>
        </FormItem>
        <FromItem>
          <Button type="primary" @click="handleOk">好</Button>
        </FromItem>
      </Form>
    </Drawer>
  </div>
</template>
<script src="./performancePad.js"></script>
<style lang="less" src="./performancePad.less" scoped></style>
