<template>
  <div class="login container">
    <input
      type="text"
      placeholder="用户名"
      autocomplete="off"
      v-model="user.username"
    />
    <input
      type="password"
      placeholder="密码"
      autocomplete="off"
      v-model="user.password"
      @keyup.enter="login"
    />
    <button @click="login">登 录</button>
    <top-tip ref="tip" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  head() {
    return {
      title: "登录 - " + this.$store.state.user.nickname
    };
  },
  methods: {
    login() {
      if (!this.user.username || !this.user.password) {
        return false;
      }
      this.$store.dispatch("LOGIN", this.user).then(data => {
        if (data.success) {
          document.cookie = `token=${data.data.token}; path=/`;
          this.$router.push("/admin/publish");
        } else {
          this.$refs.tip.openTip("用户名或密码不正确");
        }
      });
    }
  }
};
</script>
