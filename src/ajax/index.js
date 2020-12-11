import axios from "axios";
import qs from "qs";

import apis from "./apis";
import config from "../config";
import router from "../router";

import { Message } from "element-ui";

import util from "../util";

axios.defaults.timeout = 30000;
axios.defaults.baseURL = config.api;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(
  function(config) {
    const token = util.getLocalStornage("token");
    config.headers.Authorization = token;

    if (["post", "delete", "put"].includes(config.method)) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function(err) {
    // 请求失败的处理
    return Promise.reject(err);
  }
);
// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use(
  (res) => {
    // 处理响应数据
    // console.log("处理响应数据res", res.status)
    return res;
  },
  (err) => {
    // 处理响应失败
    // console.log("响应失败", JSON.stringify(err))
    const errMsg = JSON.stringify(err);
    const if402 = errMsg.indexOf("402");
    const if401 = errMsg.indexOf("401");
    const if400 = errMsg.indexOf("400");
    // Message.close()
    if (if402 != -1 || if401 != -1 || if400 != -1) {
      util.clearLocalStornage();
      router.replace("login");
    }
    return Promise.reject(err);
  }
);
function resolveData(data, resolve, url) {
  const status = data.status;
  if (url == "member/login" && status != 200) {
    Message.closeAll();
    Message.error(data.message);
    resolve();
    return;
  }
  if (status == 200) {
    resolve(data.data);
  } else if (status == 402) {
    util.clearLocalStornage();
    router.replace("login");
  } else if (status == 450) {
    resolve(data);
  } else {
    Message.closeAll();
    Message.error(data.message);
  }
}

function post(url, params = {}, showTip = true) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolveData(res.data, resolve, url);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// get
function get(url, params = {}, showTip = true) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolveData(res.data, resolve, url);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function put(url, params = {}, showTip = true) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((res) => {
        resolveData(res.data, resolve, url);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function del(url, params = {}, showTip = true) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then((res) => {
        resolveData(res.data, resolve, url);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// 具体请求方法
export default {
  // 获取图形验证码
  getCode() {
    return get(apis.code);
  },
};
