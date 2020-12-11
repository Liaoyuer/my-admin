export default {
  data() {
    return {
    };
  },
  created() {},
  methods: {
    // 返回
    goBack() {
      this.$router.go(-1);
    },
    // 跳转链接
    navigateTo (val) {
      this.$router.push(val)
    },
    replaceTo (val = "/") {
      this.$router.replace(val);
    },
  },
};
