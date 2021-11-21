<template>
  <div id="nav">
    <router-link to="/login">Login</router-link> |
    <router-link to="/posts">Posts</router-link> |
    <router-link to="/contactus">Contact us</router-link>
  </div>
  <div id="footer">
    <router-link to="/contactus">Contact us</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
