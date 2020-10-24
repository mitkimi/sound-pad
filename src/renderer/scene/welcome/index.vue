<template>
  <div class="scene">
    <Spin fix v-if="loading"></Spin>
    <div class="logo">
      <img src="@/assets/SOUNDPAD.png" />
    </div>
    <div class="welcome-button-container">
      <div class="create-performance">
        <div class="welcome-button" v-if="!choose" @click="handleChooseButton('create')">
          <div class="icon">
            <Icon type="md-add-circle" />
          </div>
          新建节目单
        </div>
        <div class="welcome-button active" v-if="choose === 'create'">
          <div class="icon">
            <Icon type="md-add-circle" />
          </div>
          新建节目单
        </div>
        <div class="create-form" :style="{width: choose !== 'create' ? 0 : '380px'}">
          <div class="tips">给节目单取一个名字吧</div>
          <div class="name">
            <Input v-model="name" placeholder="节目单名字可以修改～"></Input>
          </div>
          <div class="submit">
            <Button @click="handleChooseButton(null)" style="margin-right: 20px;">取消</Button>
            <Button type="primary" @click="handleCreateOk">好</Button>
          </div>
        </div>
      </div>
      
      <div class="welcome-button" @click="handleChooseButton(null)">
        <div class="icon">
          <Icon type="md-bookmark" />
        </div>
        打开节目单
      </div>
    </div>
    <div class="copyright">
      <p>&copy; SOUNDPAD {{version}} {{versionName}}</p>
      <p><router-link to="/setting">设置</router-link></p>
    </div>
  </div>
</template>
<script src="./welcome.js"></script>
<style lang="less" src="./welcome.less" scoped></style>
