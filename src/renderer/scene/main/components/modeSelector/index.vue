<template>
  <div class="component">
    <Button type="primary" v-if="mode === 'modify'" @click="handleShowModal">编排模式</Button>
    <Button type="success" v-if="mode === 'performing'" @click="handleShowModal">演出模式</Button>
    <Modal
      v-model="modalShow"
      title="选择演出模式"
      @on-ok="handleOk"
      @on-cancel="handleCancel">
      <div class="modal-body">
        <div class="tips">请选择要切换的模式</div>
        <div class="selector">
          <div class="select-item performance" @click="bufferMode = 'performance'">
            <div class="box active" v-if="bufferMode === 'performance'">
              <Icon class="icon" type="md-film" />
              <div class="name">演出模式</div>
            </div>
            <div class="box inactive" v-else>
              <Icon class="icon" type="md-film" />
              <div class="name">演出模式</div>
            </div>
          </div>
          <div class="select-item modify" @click="bufferMode = 'modify'">
            <div class="box active" v-if="bufferMode === 'modify'">
              <Icon class="icon" type="md-cube" />
              <div class="name">编排模式</div>
            </div>
            <div class="box inactive" v-else>
              <Icon class="icon" type="md-cube" />
              <div class="name">编排模式</div>
            </div>
            
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script src="./modeSelector.js"></script>
<style lang="less" src="./modeSelector.less" scoped></style>
