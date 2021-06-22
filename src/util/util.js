import * as constMap from "./constMap";

export default {
  localStorageSet(key, value) {
    if (typeof value == "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },
  localStorageGet(key) {
    if (localStorage.getItem(key) == null || localStorage.getItem(key) == "") {
      return null;
    } else {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (error) {
        return localStorage.getItem(key);
      }
    }
  },
  localStorageClear() {
    localStorage.clear();
  },
  localStorageRemove(key) {
    localStorage.removeItem(key);
  },
  sessionLocalStorageSet(key, value) {
    if (typeof value == "object") {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.setItem(key, value);
    }
  },
  sessionLocalStorageGet(key) {
    if (
      sessionStorage.getItem(key) == null ||
      sessionStorage.getItem(key) == ""
    ) {
      return null;
    } else {
      try {
        return JSON.parse(sessionStorage.getItem(key));
      } catch (error) {
        return sessionStorage.getItem(key);
      }
    }
  },
  merge(args1, args2) {
    let newArgs1 = JSON.parse(JSON.stringify(args1));
    let newArgs2 = JSON.parse(JSON.stringify(args2));
    return Object.assign({}, newArgs1, newArgs2);
    // return Object.assign({}, args1, args2);
  },
  sessionLocalStorageClear() {
    sessionStorage.clear();
  },
  sessionLocalStorageRemove(key) {
    sessionStorage.removeItem(key);
  },
  analysisElevator(elevator) {
    if (parseInt(elevator) > 0) {
      return "有配套";
    } else {
      return "无配套";
    }
  },
  countMapFilter(value, ListName = "ROOMTYPE", resultValue = null) {
    let result = constMap[ListName].filter(
      item => parseInt(item.value) == parseInt(value)
    );
    return result.length > 0 ? result[0].key : resultValue;
  },
  //添加房源数据对比
  diffGet(rData, nowData) {
    let newData = JSON.parse(JSON.stringify(rData));
    let newnowData = JSON.parse(JSON.stringify(nowData));
    for (let item in newData) {
      if (newnowData[item] != undefined) {
        if (JSON.stringify(newnowData[item]) == JSON.stringify(rData[item])) {
          delete newnowData[item];
        }
      } else if (newData[item] == null) {
        delete newnowData[item];
      }
    }
    return newnowData;
  },
  find(list, f) {
    return list.filter(f)[0];
  },
  deepCopy(obj, cache = []) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    const hit = find(cache, c => c.original === obj);
    if (hit) {
      return hit.copy;
    }
    const copy = Array.isArray(obj) ? [] : {};
    cache.push({
      original: obj,
      copy
    });
    Object.keys(obj).forEach(key => {
      copy[key] = this.deepCopy(obj[key], cache);
    });
    return copy;
  },
  isNull(value) {
    if (value != 0 && (value === "" || value === null)) {
      return true;
    }
    return false;
  },
  isNotNull(value) {
    if (value != "" && value !== null) {
      return true;
    }
    return false;
  },
  isNumber(number) {
    let flag = true;
    let myreg = /^((0{1}\.\d+)|([1-9]\d*\.{1}\d+)|([1-9]+\d*)|0)$/;
    if (myreg.test(number)) {
      flag = false;
    }
    return flag;
  },
  timeToStr(time) {
    var m = 0,
      s = 0,
      _m = "00",
      _s = "00";
    time = Math.floor(time % 3600);
    m = Math.floor(time / 60);
    s = Math.floor(time % 60);
    _s = s < 10 ? "0" + s : s + "";
    _m = m < 10 ? "0" + m : m + "";
    return _m + ":" + _s;
  },
  //节流
  throttle(delay, callback) {
    let timeoutID;
    let lastExec = 0;

    function wrapper() {
      const self = this;
      const elapsed = Number(new Date()) - lastExec;
      const args = arguments;

      function exec() {
        lastExec = Number(new Date());
        callback.apply(self, args);
      }

      clearTimeout(timeoutID);

      if (elapsed > delay) {
        exec();
      } else {
        timeoutID = setTimeout(exec, delay - elapsed);
      }
    }

    return wrapper;
  },
  //防抖
  debounce(delay, callback) {
    let timeoutID;

    function wrapper() {
      const self = this;
      const args = arguments;

      function exec() {
        callback.apply(self, args);
      }

      clearTimeout(timeoutID);

      timeoutID = setTimeout(exec, delay);
    }

    return wrapper;
  },
  getElementTop(el) {
    if (!el) return null;
    let actualTop = el.offsetTop;
    let current = el.offsetParent;
    while (current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
    return actualTop;
  },
  getElementLeft(el) {
    if (!el) return null;
    let actualLeft = el.offsetLeft;
    let current = el.offsetParent;
    while (current !== null) {
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }
    return actualLeft;
  },
  format(time, fmt) {
    let date = new Date(time);
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
    return fmt;
  },
  getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return null;
  },
  openPage(pageParams) {
    window.open(this.$router.resolve(pageParams).href, "_blank");
  },
  //获取指定class的父节点
  getParents(element, className) {
    var returnParentElement = null;
    function getParentNode(element, className) {
      if (
        !element ||
        !element.tagName ||
        element.tagName.toLowerCase() == "body" ||
        element.tagName.toLowerCase() == "html"
      ) {
        return null;
      }
      if (element && element.classList.contains(className)) {
        returnParentElement = element;
      } else {
        getParentNode(element.parentElement, className);
      }
    }
    getParentNode(element, className);

    return returnParentElement;
  },
  regexNum(num) {
    if (!/^([+-])?(\d+)(\.\d+)?$/.test(num)) {
      return num;
    }
    let a = RegExp.$1;
    let b = RegExp.$2;
    let c = RegExp.$3;
    let re = new RegExp().compile("(\\d)(\\d{3})(,|$)");
    while (re.test(b)) b = b.replace(re, "$1,$2$3");
    return a + "" + b + "" + c;
  },
  changeNumToChinese(money) {
    var cnNums = new Array(
      "零",
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九"
    ); //汉字的数字
    var cnIntRadice = new Array("", "十", "百", "千"); //基本单位
    var cnIntUnits = new Array("", "万", "亿", "兆"); //对应整数部分扩展单位
    var cnDecUnits = new Array("角", "分", "毫", "厘"); //对应小数部分单位
    var cnInteger = ""; //整数金额时后面跟的字符
    var cnIntLast = ""; //整型完以后的单位
    var maxNum = 999999999999999.9999; //最大处理的数字
    var IntegerNum; //金额整数部分
    var DecimalNum; //金额小数部分
    var ChineseStr = ""; //输出的中文金额字符串
    var parts; //分离金额后用的数组，预定义
    var Symbol = ""; //正负值标记
    if (money == "") {
      return "";
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      //alert('超出最大处理数字');
      return "";
    }
    if (money == 0) {
      ChineseStr = cnNums[0] + cnIntLast + cnInteger;
      return ChineseStr;
    }
    if (money < 0) {
      money = -money;
      Symbol = "负 ";
    }
    money = money.toString(); //转换为字符串
    if (money.indexOf(".") == -1) {
      IntegerNum = money;
      DecimalNum = "";
    } else {
      parts = money.split(".");
      IntegerNum = parts[0];
      DecimalNum = parts[1].substr(0, 4);
    }
    if (parseInt(IntegerNum, 10) > 0) {
      //获取整型部分转换
      var zeroCount = 0;
      var IntLen = IntegerNum.length;
      for (var i = 0; i < IntLen; i++) {
        var n = IntegerNum.substr(i, 1);
        var p = IntLen - i - 1;
        var q = p / 4;
        var m = p % 4;
        if (n == "0") {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            ChineseStr += cnNums[0];
          }
          zeroCount = 0; //归零
          ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
          ChineseStr += cnIntUnits[q];
        }
      }
      ChineseStr += cnIntLast;
      //整型部分处理完毕
    }
    if (DecimalNum != "") {
      //小数部分
      var decLen = DecimalNum.length;
      for (let i = 0; i < decLen; i++) {
        let n = DecimalNum.substr(i, 1);
        if (n != "0") {
          ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (ChineseStr == "") {
      ChineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (DecimalNum == "") {
      ChineseStr += cnInteger;
    }
    ChineseStr = Symbol + ChineseStr;
    // 一十以上二十以下一十转为十
    if (ChineseStr.indexOf("一十") == 0) {
      ChineseStr = ChineseStr.substring(1, ChineseStr.length);
    }
    return ChineseStr;
  },

  /**
   * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
   * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier)
   * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
   * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
   * v-for的时候,推荐使用后端返回的id而不是循环的index
   * @param {Number} len uuid的长度
   * @param {Boolean} firstU 将返回的首字母置为"u"
   * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
   */
  guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
      ""
    );
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
      for (let i = 0; i < len; i++) {
        uuid[i] = chars[0 | (Math.random() * radix)];
      }
    } else {
      let r;
      // rfc4122标准要求返回的uuid中,某些位为固定的字符
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return "u" + uuid.join("");
    } else {
      return uuid.join("");
    }
  },
  /**
   * @example: 相加，相减计算封装
   * @param {*} num1
   * @param {*} num2
   * @param {*} type +/-
   * @return {*}
   */
  countUtil(num1, num2, type) {
    let sq1, sq2, multiple;
    try {
      sq1 = num1.toString().split(".")[1].length;
    } catch (e) {
      sq1 = 0;
    }
    try {
      sq2 = num2.toString().split(".")[1].length;
    } catch (e) {
      sq2 = 0;
    }
    multiple = Math.pow(10, Math.max(sq1, sq2) + 1);
    if (type == "-") {
      return (num1 * multiple - num2 * multiple) / multiple;
    } else {
      return (num1 * multiple + num2 * multiple) / multiple;
    }
  }
};
