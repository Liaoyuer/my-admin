export default {
  UEDITOR_HOME_URL: `${process.env.BASE_URL}lib/UEditor/`,
  // 编辑器不自动被内容撑高
  autoHeightEnabled: false,
  // 初始容器高度
  initialFrameHeight: 800,
  // 初始容器宽度
  initialFrameWidth: "100%",
  // 关闭自动保存
  enableAutoSave: false,
  // 上传文件接口
  serverUrl: "http://219.229.80.48:666/static/ueditor/php/controller.php"
}
