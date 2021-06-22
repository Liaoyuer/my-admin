export const USERINFO = "userinfo";
export const LOGINDATA = "logindata";
export const TOKEN = "tk";
export const SMALLThumb = "?x-oss-process=style/thumb";
// 暂无图片地址
export const EMPTYPICURL = "https://img.0be.cn/pc/no_image.svg";
// 空数据图片地址
export const EMPTYDADAPICURL =
  "https://sysimgs.oss-cn-shenzhen.aliyuncs.com/Background/kong.png";
//默认头像
export const DEFAULTHEAD =
  "https://imgtest.0be.cn/CompanyLogo/c2871155335f41d08c194c4d949e2bf2.png";
export const HOUSEBELONGLIST = [
  {
    key: "车位",
    value: 0
  },
  {
    key: "车库",
    value: 1
  },
  {
    key: "杂物间",
    value: 2
  },
  {
    key: "其他",
    value: 3
  }
];

export const APPLYTYPE = [
  {
    key: "请假",
    value: 1
  },
  {
    key: "补卡",
    value: 2
  }
];

export const TREMEPACKERS = "tremePackers"; //默认皮肤缓存
export const TREMEDEFTULTCOLOR = "#0d824b"; //默认皮肤颜色
export const FONTSIZEBASE = 12; //基础字体大小
export const FONTSIZEBASENAME = "fontsizebase"; //基础字体大小
export const HOUSEUSE = [
  // 房屋用途 houseUse
  {
    key: "用途1",
    value: 1
  },
  {
    key: "用途2",
    value: 2
  },
  {
    key: "用途3",
    value: 3
  }
];
export const CONTRACTTYPE = [
  // 合同类型
  {
    key: "买卖合同",
    value: 1
  },
  {
    key: "租赁合同",
    value: 2
  },
  {
    key: "人事合同",
    value: 3
  },
  {
    key: "解约合同",
    value: 4
  }
];
export const CONTRACTCALCULATE = [
  // 合同类型
  {
    key: "买卖合同",
    value: 1
  },
  {
    key: "租赁合同",
    value: 2
  }
];
export const DATATYPE = [
  // 数据类型
  {
    key: "常规",
    value: 0,
    regular: ""
  },
  {
    key: "纯文本",
    value: 1,
    regular: ""
  },
  {
    key: "数字(小数点)",
    value: 2,
    regular: "^([0-9]\\d*\\.{0,1}\\d*|0\\.{0,1}\\d*[0-9]\\d*)$"
  },
  {
    key: "数字(整数)",
    value: 3,
    regular: "^-?[0-9]\\d*$"
  },
  {
    key: "数字(正整数)",
    value: 4,
    regular: "^[0-9]\\d*$"
  },
  {
    key: "百分比(整数)",
    value: 5,
    regular: "(\\-)?[0-9]\\d*%$"
  },
  {
    key: "百分比(小数)",
    value: 6,
    regular: "^(\\-)?\\d+(\\.{0,1}\\d{0,5})%$"
  },
  {
    key: "日期",
    value: 7,
    regular:
      "^[1-9]\\d{3}(\\-|\\/|.)(0[1-9]|1[0-2])(\\-|\\/|.)(0[1-9]|[1-2][0-9]|3[0-1])$"
  },
  {
    key: "日期/时间",
    value: 8,
    regular:
      "^[1-9]\\d{3}(\\-|\\/|.)(0[1-9]|1[0-2])(\\-|\\/|.)(0[1-9]|[1-2][0-9]|3[0-1])\\s+(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d$"
  },
  {
    key: "货币",
    value: 9,
    regular: "(^[0-9]\\d*\\.{0,1}\\d{0,2}|0\\.{0,1}\\d*[0-9]\\d{0,2})$"
  },
  {
    key: "手机号",
    value: 10,
    regular:
      "^((\\d{11})|^((\\d{7,8})|(\\d{4}|\\d{3})-(\\d{7,8})|(\\d{4}|\\d{3})-(\\d{7,8})-(\\d{4}|\\d{3}|\\d{2}|\\d{1})|(\\d{7,8})-(\\d{4}|\\d{3}|\\d{2}|\\d{1}))$)$"
  },
  {
    key: "邮政编码",
    value: 11,
    regular: "^[1-9]\\d{5}(?!\\d)$"
  },
  {
    key: "身份证号",
    value: 12,
    regular: "(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)"
  },
  {
    key: "单选AB",
    value: 13,
    regular: "^[A|B]$"
  },
  {
    key: "单选ABC",
    value: 14,
    regular: "^[A|B|C]$"
  },
  {
    key: "单选ABCD",
    value: 15,
    regular: "^[A|B|C|D]$"
  },
  {
    key: "单选ABCDE",
    value: 21,
    regular: "^[A|B|C|D|E]$"
  },
  {
    key: "单选ABCDEF",
    value: 22,
    regular: "^[A|B|C|D|E|F]$"
  },
  {
    key: "单选ABCDEFG",
    value: 23,
    regular: "^[A|B|C|D|E|F|G]$"
  },
  {
    key: "单选甲乙",
    value: 16,
    regular: "^[甲|乙]$"
  },
  {
    key: "日期-年",
    value: 17,
    regular: "^(1949|19[5-9]\\d|20\\d{2}|2100)$"
  },
  {
    key: "日期-月",
    value: 18,
    regular: "^(0?[[1-9]|1[0-2])$"
  },
  {
    key: "日期-日",
    value: 19,
    regular: "^(0?[[1-9]|1[0-9]|2[0-9]|3[0-1])$"
  },
  {
    key: "货币大写",
    value: 20,
    regular: "^[圆|角|分|壹|贰|叁|肆|伍|陆|柒|捌|玖|拾|佰|仟|万|亿|元|零|整|萬]*$"
  }
];
export const DECORATION = [
  {
    //装修 decoration
    key: "毛坯",
    value: 1
  },
  {
    key: "简单装修",
    value: 2
  },
  {
    key: "精装修",
    value: 3
  },
  {
    key: "豪华装修",
    value: 4
  }
];
export const WEEK = [
  {
    //星期
    key: "星期日",
    value: 0
  },
  {
    key: "星期一",
    value: 1
  },
  {
    key: "星期二",
    value: 2
  },
  {
    key: "星期三",
    value: 3
  },
  {
    key: "星期四",
    value: 4
  },
  {
    key: "星期五",
    value: 5
  },
  {
    key: "星期六",
    value: 6
  }
];

export const REPAIRABNORMALTYPE = [
  //补卡类型
  {
    key: "迟到",
    value: 1
  },
  {
    key: "早退",
    value: 2
  },
  {
    key: "旷工",
    value: 3
  },
  {
    key: "请假",
    value: 4
  },
  {
    key: "迟到早退",
    value: 5
  }
];
export const HOUSESTRUCT = [
  // 房屋结构 houseStruct
  {
    key: "结构1",
    value: 1
  },
  {
    key: "结构2",
    value: 2
  },
  {
    key: "结构3",
    value: 3
  }
];
export const PROPERTY = [
  // 产权性质 property
  {
    key: "性质1",
    value: 1
  },
  {
    key: "性质2",
    value: 2
  },
  {
    key: "性质3",
    value: 3
  }
];

export const PRIMARYSCHOOL = [
  // 小学 primarySchool
  {
    key: "小学1",
    value: 1
  },
  {
    key: "小学2",
    value: 2
  },
  {
    key: "小学3",
    value: 3
  }
];

export const MIDDLESCHOOL = [
  // 中学 middleSchool
  {
    key: "中学1",
    value: 1
  },
  {
    key: "中学2",
    value: 2
  },
  {
    key: "中学3",
    value: 3
  }
];

export const PRIMARYSCHOOLUSE = [
  // 小学占用 primarySchoolUse
  {
    key: "一年级",
    value: 1
  },
  {
    key: "二年级",
    value: 2
  },
  {
    key: "三年级",
    value: 3
  },
  {
    key: "四年级",
    value: 4
  },
  {
    key: "五年级",
    value: 5
  },
  {
    key: "六年级",
    value: 6
  }
];

export const PRIMARYSCHOOLUSECOPY = [
  // 小学占用 primarySchoolUse
  {
    key: "未占用",
    value: 0
  },
  {
    key: "一年级",
    value: 1
  },
  {
    key: "二年级",
    value: 2
  },
  {
    key: "三年级",
    value: 3
  },
  {
    key: "四年级",
    value: 4
  },
  {
    key: "五年级",
    value: 5
  },
  {
    key: "六年级",
    value: 6
  }
];

export const MIDDLESCHOOLUSE = [
  // 中学占用 middleSchoolUse
  {
    key: "初一",
    value: 1
  },
  {
    key: "初二",
    value: 2
  },
  {
    key: "初三",
    value: 3
  }
];

export const MIDDLESCHOOLUSECOPY = [
  // 中学占用 middleSchoolUse
  {
    key: "未占用",
    value: 0
  },
  {
    key: "初一",
    value: 1
  },
  {
    key: "初二",
    value: 2
  },
  {
    key: "初三",
    value: 3
  }
];

export const HOUSESOURCE = [
  //房屋来源 houseSource
  {
    key: "上门",
    value: 1
  },
  {
    key: "转介",
    value: 2
  },
  {
    key: "电话",
    value: 3
  },
  {
    key: "摆排",
    value: 4
  },
  {
    key: "鑫家网",
    value: 5
  },
  {
    key: "58",
    value: 6
  },
  {
    key: "安居客",
    value: 7
  }
];
export const HOUSINGSITUATION = [
  //房屋现状 HOUSINGSITUATION
  {
    key: "自住",
    value: 0
  },
  {
    key: "出租",
    value: 1
  },
  {
    key: "空置",
    value: 2
  },
  {
    key: "已租空置",
    value: 3
  }
];
export const HOUSENOW = [
  //房屋现状 houseNow
  {
    key: "自住",
    value: 0
  },
  {
    key: "出租",
    value: 1
  },
  {
    key: "空置",
    value: 2
  }
];
export const ISELEVATOR = [
  // 电梯 isElevator
  {
    key: "没有",
    value: 0
  },
  {
    key: "有",
    value: 1
  }
];
export const LANDCHARACTERISTIC = [
  // 土地性质 landCharacteristic
  {
    key: "出让",
    value: 0
  },
  {
    key: "划拨",
    value: 1
  }
];

export const MORTGAGE = [
  // 抵押情况 mortgage
  {
    key: "未抵押",
    value: 0
  },
  {
    key: "抵押",
    value: 1
  }
];
export const PAYMENTMETHOD = [
  // 付款方式 paymentMethod
  {
    key: "均可",
    value: 0
  },
  {
    key: "一次性",
    value: 1
  },
  {
    key: "不可用公积金",
    value: 2
  }
];
export const HOUSEBELONG = [
  // 附属配套 houseBelong
  {
    key: "车位",
    value: 0
  },
  {
    key: "车库",
    value: 1
  },
  {
    key: "杂物间",
    value: 2
  },
  {
    key: "其他",
    value: 3
  }
];
export const ISOWNERONLY = [
  // ISOWNERONLY 唯一用户
  {
    key: "不唯一",
    value: 0
  },
  {
    key: "唯一",
    value: 1
  }
];
export const ROOMTYPE = [
  // 户型结构 roomType
  {
    key: "平层",
    value: 0
  },
  {
    key: "错层",
    value: 1
  },
  {
    key: "复式",
    value: 2
  },
  {
    key: "楼中楼",
    value: 3
  }
];
export const SIGN = [
  //户口情况 sign
  {
    key: "未占用",
    value: 0
  },
  {
    key: "占用",
    value: 1
  }
];
export const HOUSEDELIVERY = [
  //交房时间 houseDelivery
  {
    key: "需返租",
    value: 0
  },
  {
    key: "款清交房",
    value: 1
  }
];

export const MORTGAGEBANK = [
  //抵押银行 mortgageBank
  {
    key: "中国工商银行",
    value: 0
  },
  {
    key: "中国建设银行",
    value: 1
  },
  {
    key: "中国农业银行",
    value: 2
  },
  {
    key: "中国银行",
    value: 3
  },
  {
    key: "中国邮政储蓄银行",
    value: 4
  },
  {
    key: "农商银行",
    value: 5
  },
  {
    key: "交通银行",
    value: 6
  },
  {
    key: "招商银行",
    value: 7
  },

  {
    key: "光大银行",
    value: 8
  },
  {
    key: "民生银行",
    value: 9
  },
  {
    key: "平安银行",
    value: 10
  },
  {
    key: "浦发银行",
    value: 11
  },
  {
    key: "中信银行",
    value: 12
  },
  {
    key: "兴业银行",
    value: 13
  },
  {
    key: "华夏银行",
    value: 14
  },
  {
    key: "厦门国际银行",
    value: 15
  },
  {
    key: "厦门银行",
    value: 16
  }
];

export const FOLLOWWAY = [
  //跟进类型 followWay
  {
    key: "出售条件变化",
    value: 27
  },
  {
    key: "业主心态状态",
    value: 28
  },
  {
    key: "其他",
    value: 11
  }
];

export const CERTIFICATETYPE = [
  //产权证类型
  {
    key: "不动产权证",
    value: 1
  },
  {
    key: "购房合同",
    value: 2
  },
  {
    key: "拆迁安置协议书",
    value: 3
  }
];

export const REMARK = [
  //备注
  {
    key: "小区介绍",
    value: "communityDesc"
  },
  {
    key: "户型介绍",
    value: "roomDesc"
  },
  {
    key: "税费解析",
    value: "taxDesc"
  },
  {
    key: "核心卖点",
    value: "saleDesc"
  }
];

export const ONLYTYPE = [
  //委托类型
  {
    key: "独家",
    value: 1
  },
  {
    key: "普通",
    value: 2
  },
  {
    key: "限时",
    value: 3
  }
];

export const BUYINTENTION = [
  //委托类型
  {
    key: "无意向",
    value: 0
  },
  {
    key: "较弱",
    value: 1
  },
  {
    key: "一般",
    value: 2
  },
  {
    key: "强烈",
    value: 3
  }
];

export const SEX = [
  //性别
  {
    key: "男",
    value: 1
  },
  {
    key: "女",
    value: 0
  }
];

export const PURCHASEPURPOSE = [
  {
    key: "刚需",
    value: "刚需"
  },
  {
    key: "投资",
    value: "投资"
  },
  {
    key: "办公",
    value: "办公"
  },
  {
    key: "改善",
    value: "改善"
  },
  {
    key: "教育",
    value: "教育"
  },
  {
    key: "其他",
    value: "其他"
  }
];
export const LEAVESUBTYPE = [
  //请假子类型
  {
    key: "事假",
    value: 11
  },
  {
    key: "病假",
    value: 12
  },
  {
    key: "婚假",
    value: 13
  },
  {
    key: "产假",
    value: 14
  },
  {
    key: "丧假",
    value: 15
  },
  {
    key: "公休",
    value: 16
  },
  {
    key: "年休假",
    value: 17
  }
];

// 学历
export const EDUCATIONLIST = [
  {
    label: "小学",
    value: 1
  },
  {
    label: "初中",
    value: 2
  },
  {
    label: "高中/中专",
    value: 3
  },
  {
    label: "涵授/电大",
    value: 4
  },
  {
    label: "大专",
    value: 5
  },
  {
    label: "本科",
    value: 6
  },
  {
    label: "硕士",
    value: 7
  },
  {
    label: "博士",
    value: 8
  }
];

// 关系
export const RELATIONSHIPLIST = [
  "夫妻",
  "父亲",
  "母亲",
  "姐姐",
  "妹妹",
  "哥哥",
  "弟弟",
  "叔叔/伯父",
  "婶婶/伯母",
  "阿姨",
  "其他"
];

// 合伙人类型
export const PARTNERTYPELIST = [
  {
    label: "奋斗者",
    value: 1
  },
  {
    label: "平台",
    value: 2
  },
  {
    label: "公司",
    value: 3
  },
  {
    label: "门店",
    value: 4
  }
];
