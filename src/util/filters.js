const typeChange = (val) => {
  if (val == 1) {
    return "图片广告"
  }
  if (val == 2) {
    return "视频广告"
  }
}

const visibleChange = (val) => {
  let type_name = "";
  switch (val) {
    case "0":
      type_name = "普通会员";
      break;
    case "1":
      type_name = "经纪人";
      break;
    case "2": 
      type_name = "设计公司";
      break;
    case "3": 
      type_name = "设计师";
      break;
    case "4": 
      type_name = "装修公司";
      break;
    case "5": 
      type_name = "法律顾问";
      break;
  }
  return type_name
}

const toPrice = (val) => {
  if (!val) return val;
  const str = val.split(".");
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  const val1 = str[0].replace(reg, "$&,");
  return str.length > 1 && str[1] ? `${val1}.${str[1]}` : `${val1}.00`;
}

export {
  typeChange,
  visibleChange,
  toPrice
}
