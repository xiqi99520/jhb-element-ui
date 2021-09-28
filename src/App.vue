<template>
  <div id="app">
    <div class="logo-container">
      <img class="icon-logo" src="./assets/img/logo.png" />JHB Element UI
    </div>
    <div class="jhb-doc">
      <div class="side-bar">
        <div class="menu-list">
          <router-link to="/">Home</router-link>
          <router-link to="/test">Test</router-link>
          <router-link to="/button">Button</router-link>
          <router-link to="/link">Link</router-link>
          <router-link to="/radio">Radio</router-link>
          <router-link to="/checkbox">Checkbox</router-link>
          <router-link to="/input">Input</router-link>
          <router-link to="/inputNumber">InputNumber</router-link>
          <router-link to="/select">Select</router-link>
          <router-link to="/time">Time</router-link>
          <router-link to="/alert">Notice</router-link>
          <router-link to="/tab">Tabs</router-link>
          <router-link to="/result">Result</router-link>
          <router-link to="/tag">Tag</router-link>
          <router-link to="/switch">Switch</router-link>
          <router-link to="/pagination">Other</router-link>
        </div>
      </div>
      <div class="app-main">
        <div class="main-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  // min-width: 1470px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.jhb-doc {
  display: flex;
  padding-top: 64px;
}
.logo-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  font-weight: bold;
  color: #2c3e50;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #efeff5;
  box-sizing: border-box;
  padding-left: 32px;
  font-size: 16px;
  font-weight: 500;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  .icon-logo {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
}
.side-bar {
  width: 272px;
  height: 100%;
  background-color: #fff;
  overflow: auto;
  border-right: 1px solid #efeff5;
  flex-shrink: 0;
  position: relative;
  position: fixed;
  left: 0;
  top: 64px;
  z-index: 999;
}
.side-bar .menu-list {
  display: flex;
  flex-direction: column;
}
.side-bar .menu-list a {
  display: block;
  width: 100%;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  padding-left: 48px;
  font-size: 14px;
  color: #333639;
  text-decoration: none;
  margin-top: 6px;
}

.side-bar .menu-list a:first-child {
  margin-top: 0;
}

.side-bar .menu-list a.router-link-exact-active {
  background-color: rgba($color: #ff5c10, $alpha: 0.1);
  color: #ff5c10;
}
.app-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  // padding-left: 272px;
}
.app-main .nav-bar {
  width: 100%;
  height: 50px;
  background: #fff;
}
.app-main .nav-bar .el-dropdown {
  line-height: 50px;
  float: right;
  margin-right: 30px;
}
.app-main .nav-bar .el-dropdown .el-icon-user {
  font-size: 20px;
  margin-right: 5px;
}
.app-main .main-content {
  box-sizing: border-box;
  background: #fff;
  padding: 32px;
}
</style>
