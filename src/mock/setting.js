import Mock from "mockjs";
import avatar from "../assets/avatar.png";
import erweima from "../assets/QRcode.png";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: avatar,
    siteTitle: "我的个人空间",
    github: "https://github.com/ybyb-campus",
    qq: "1151345372",
    qqQrCode:
      erweima,
    weixin: "yang1151345372",
    weixinQrCode:
      erweima,
    mail: "1151345372@qq.com",
    icp: "黑ICP备666号",
    githubName: "ybyb-campus",
    favicon: avatar,
  },
});
