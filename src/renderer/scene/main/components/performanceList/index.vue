<template>
  <div class="component">
    <div class="list">
      <div class="list-item" v-for="(item, index) in list" :key="index" @click="handleSelectListItem(index)">
        <div class="item active" v-if="active === index">
          <Input v-if="isModifying && isModifying === item.id" v-model="item.name" @on-blur="handleBlurInput" placeholder="节目名称" style="width: 300px" />
          <span v-else>{{item.name || '[空白]'}}</span>
          <Button v-if="mode === 'modify' && !isModifying" style="margin-left: 20px;" size="small" type="primary" shape="circle" icon="md-create" @click.stop="handleModifyName(item.id)"></Button>
          <Button v-if="mode === 'modify'" style="margin-left: 20px;" size="small" type="primary" shape="circle" icon="md-trash" @click.stop="handleMoveTrash(item.id)"></Button>
        </div>
        <div class="item inactive" v-else>
          {{item.name || '[空白]'}}
          <Button v-if="mode === 'modify'" style="margin-left: 20px;" size="small" shape="circle" icon="md-trash" @click.stop="handleMoveTrash(item.id)"></Button>
        </div>
      </div>
      <div>
        <Button @click="handelAddToList">再来一条</Button>
      </div>
    </div>
  </div>
</template>
<script src="./performanceList.js"></script>
<style lang="less" src="./performanceList.less" scoped></style>
