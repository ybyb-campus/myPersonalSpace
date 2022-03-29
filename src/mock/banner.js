import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
        id: "1",
        midImg: "https://www.ghostoact.com/static/arts/img/skins/Sett_Splash_8.jpg",
        bigImg: "https://www.ghostoact.com/static/arts/img/splash/azxxo0cvookc6wh686c4zixkcgabcztr.jpg",
        title: "腕豪·瑟提",
        description: "你被击倒多少次都不重要，重要的是你有多少次爬了起来。",
    },
    {
        id: "2",
        midImg: "https://www.ghostoact.com/static/arts/img/skins/Mordekaiser_Splash_13.jpg",
        bigImg: "https://www.ghostoact.com/static/arts/img/splash/akzlhyuic6oupiunl73nc54l5jeovhlo.jpg",
        title: "铁铠冥魂",
        description: "向着无尽的荣耀，前进。",
    },
    {
        id: "3",
        midImg: "https://www.ghostoact.com/static/arts/img/skins/Aatrox_Splash_2.jpg",
        bigImg: "https://www.ghostoact.com/static/arts/img/splash/Qai72q.jpg",
        title: "暗裔剑魔",
        description: "犹豫既是死亡",
    },
],
});
