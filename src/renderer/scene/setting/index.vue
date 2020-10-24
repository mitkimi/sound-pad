<template>
  <div class="scene">
    <div class="header">
      <div class="name">设置</div>
      <div class="search">
        <Input prefix="md-search" v-model="searchKeyword" placeholder="在设置中搜索" />
      </div>
    </div>
    <div class="main-body">
      <div class="menu">
        <div class="list">
          <div class="list-item">
            <div class="icon"><Icon type="md-apps" /></div>
            <div class="list-name">通用</div>
          </div>
          <div class="list-item">
            <div class="icon"><Icon type="md-clipboard" /></div>
            <div class="list-name">主屏幕</div>
          </div>
          <div class="list-item">
            <div class="icon"><Icon type="md-infinite" /></div>
            <div class="list-name">演出安全</div>
          </div>
          <div class="list-item">
            <div class="icon"><Icon type="md-information-circle" /></div>
            <div class="list-name">关于</div>
          </div>
          <div class="list-item">
            <div class="icon"><Icon type="md-help-circle" /></div>
            <div class="list-name">意见与反馈</div>
          </div>
          <div class="list-item">
            <div class="icon"><Icon type="md-attach" /></div>
            <div class="list-name">版本</div>
          </div>
        </div>
        <div class="backwords">
          <Button icon="md-arrow-round-back" @click="handleBack">返回</Button>
        </div>
      </div>
      <div class="container">
        <div class="body-container">
          <div class="title">通用</div>
          <List border>
            <ListItem>
              <div class="panel">
                <div class="name select-name">语 言</div>
                <div class="value">
                  <Select v-model="setting.normal.language" style="width:200px">
                    <Option value="chinese" :key="0">简体中文</Option>
                    <!-- <Option value="english" :key="1">English</Option>
                    <Option value="japanese" :key="2">日本語</Option> -->
                  </Select>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name select-name">地 区</div>
                <div class="value">
                  <Select v-model="setting.normal.locale" style="width:200px">
                    <Option value="china" :key="0">中国大陆</Option>
                  </Select>
                </div>
              </div>
            </ListItem>
          </List>
        </div>
        <div class="body-container">
          <div class="title">主屏幕</div>
          <List border>
            <ListItem>
              <div class="panel">
                <div class="name select-name">默认模式</div>
                <div class="value">
                  <Select v-model="setting.mainScreen.defaultMode" style="width:200px">
                    <Option value="performing" :key="0">演出模式</Option>
                    <Option value="modify" :key="1">编排模式</Option>
                  </Select>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">显示系统时间</div>
                <div class="value">
                  <i-Switch v-model="setting.mainScreen.showTime" @on-change="handleSwitchToggle('showTime')" />
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">显示电量</div>
                <div class="value">
                  <i-Switch v-model="setting.mainScreen.showBattery" @on-change="handleSwitchToggle('showBattery')" />
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">深色模式</div>
                <div class="value">
                  <i-Switch v-model="setting.mainScreen.darkMode" @on-change="handleSwitchToggle('darkMode')" />
                </div>
              </div>
            </ListItem>
          </List>
        </div>
        <div class="body-container">
          <div class="title">演出安全</div>
          <List border>
            <ListItem>
              <div class="panel">
                <div class="name">进入演出模式时验证密码</div>
                <div class="value">
                  <i-Switch v-model="setting.security.performing" @on-change="handleSwitchToggle('performing')" />
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">进入编排模式时验证密码</div>
                <div class="value">
                  <i-Switch v-model="setting.security.modify" @on-change="handleSwitchToggle('modify')" />
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">设置密码</div>
                <div class="value">
                  <Input v-model="setting.security.password" type="password"></Input>
                </div>
              </div>
            </ListItem>
          </List>
        </div>
        <div class="body-container">
          <div class="title">关于</div>
          <List border>
            <ListItem>
              <div class="panel">
                <div class="name">软件需求</div>
                <div class="value">田昊天 孙 峥</div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">软件设计</div>
                <div class="value">任彦逸 田昊天 申旭凌</div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">软件研发</div>
                <div class="value">
                  <div class="link" @click="windowOpen('https://www.mitkimi.com/')">田昊天</div>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">网 站</div>
                <div class="value">
                  <div class="link" @click="windowOpen('https://www.mitkimi.com/s/software')">mitkimi.com/s/software</div>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">软件研发</div>
                <div class="value">田昊天</div>
              </div>
            </ListItem>
          </List>
        </div>
        <div class="body-container">
          <div class="title">意见与反馈</div>
          <List border>
            <ListItem>
              <div class="panel">
                <div class="name">邮 箱</div>
                <div class="value">i@mitkimi.com</div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">版本升级</div>
                <div class="value">
                  <div class="link" @click="windowOpen('https://www.mitkimi.com/s/software')">检查升级</div>
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">支持与赞助</div>
                <div class="value">
                  <div class="link" @click="windowOpen('https://www.mitkimi.com/s/donate')">赞助</div>
                </div>
              </div>
            </ListItem>
          </List>
        </div>
        <div class="body-container">
          <div class="title">版本</div>
          <List border>
            <ListItem>
              <div class="panel">
                <div class="name">当前版本</div>
                <div class="value">v 0.0.1 Alpha 测试版</div>
              </div>
            </ListItem>
            <ListItem>
              <div class="panel">
                <div class="name">最新版本</div>
                <div class="value">您正在使用最新版本</div>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./setting.js"></script>
<style lang="less" src="./setting.less" scoped></style>
