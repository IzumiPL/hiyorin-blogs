// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
    {
        id: 0,
        title: "Astro",
        imgurl: "https://avatars.githubusercontent.com/u/44914786?s=48&v=4",
        desc: "内容驱动型网站的 Web 框架. ⭐️ Star to support our work!",
        siteurl: "https://github.com/withastro/astro",
        tags: ["Framework"],
    },
    {
        id: 1,
        title: "AkileCloud",
        imgurl: "https://akile.io/favicon.ico",
        desc: "云服务器",
        siteurl: "https://akile.io/",
        tags: ["CloudServiceArea"],
    },
    {
        id: 2,
        title: "Vercel",
        imgurl: "https://vercel.com/favicon.ico",
        desc: "静态网站托管平台",
        siteurl: "https://vercel.com",
        tags: ["WebHostingPlatform"],
    },
    {
        id: 3,
        title: "Netlify",
        imgurl: "https://netlify.com/favicon/apple-touch-icon.png",
        desc: "静态网站托管平台",
        siteurl: "https://netlify.com",
        tags: ["WebHostingPlatform"],
    },
    {
        id: 4,
        title: "Convertio",
        imgurl:
            "https://static.convertio.co/img/apple-touch-icon-180x180-precomposed.png",
        desc: "在线文件转换器",
        siteurl: "https://convertio.co/zh/",
        tags: ["FileConverter"],
    },
    {
        id: 5,
        title: "Chat-GPT",
        imgurl: "https://cdn.oaistatic.com/assets/favicon-eex17e9e.ico",
        desc: "一款好用的AI工具",
        siteurl: "https://9.234456.xyz/abc.html?t=567",
        tags: ["AI"],
    },
    {
        id: 6,
        title: "Fish-Audio",
        imgurl: "https://fish.audio/fish-social-og.png",
        desc: "文本转AI语音,语音克隆,语音转文本工具",
        siteurl: "https://fish.audio/zh-CN/",
        tags: ["AI"],
    },
    {
        id: 7,
        title: "Modrinth",
        imgurl: "https://cdn.modrinth.com/modrinth-new.png",
        desc: "Minecraft模组,资源包,数据包,光影,模组包,插件的下载平台",
        siteurl: "https://modrinth.com",
        tags: ["Game", "Minecraft"],
    },
    {
        id: 8,
        title: "WZGuides",
        imgurl: "https://wzguides.cn/home/favicon.ico",
        desc: "Call Of Duty Guides",
        siteurl: "https://wzguides.cn/wz2/gunsmith",
        tags: ["Game", "Call Of Duty", "WZ"],
    },
    {
        id: 9,
        title: "Itellyou",
        imgurl: "https://msdn.itellyou.cn/favicon.ico",
        desc: "映像文件下载网站",
        siteurl: "https://msdn.itellyou.cn/",
        tags: ["Tool"],
    },
    {
        id: 10,
        title: "动漫图片和壁纸",
        imgurl: "https://anime-pictures.net/favicon.ico",
        desc: "全年龄的动漫图片和壁纸",
        siteurl: "https://anime-pictures.net/?lang=zh_CN;",
        tags: ["Anime", "Wallpaper"],
    },
    {
        id: 11,
        title: "Pixiv",
        imgurl: "https://www.pixiv.net/favicon.ico",
        desc: "插画、漫画、小说作品交流服务 [pixiv]",
        siteurl: "https://www.pixiv.net/",
        tags: ["Anime", "Wallpaper"],
    },
    {
        id: 12,
        title: "TouchGal",
        imgurl: "https://www.touchgal.us/favicon.ico",
        desc: "一站式 Galgame 文化社区",
        siteurl: "https://www.touchgal.us/",
        tags: ["Anime", "Wallpaper"],
    },
    {
        id: 13,
        title: "ACG盒子",
        imgurl: "https://www.acgbox.link/wp-content/uploads/logo/86742914_p0.png",
        desc: "ACG盒子 - 专注ACG的导航盒子_ACG导航网站",
        siteurl: "https://www.acgbox.link/",
        tags: ["Anime", "Wallpaper"],
    },
    {
        id: 14,
        title: "Phira",
        imgurl: "https://phira.moe/assets/icon-708be29a.png",
        desc: "Phigros 二创社区",
        siteurl: "https://phira.moe/",
        tags: ["Anime", "Wallpaper"],
    },
    {
        id: 15,
        title: "UU在线工具",
        imgurl: "https://uutool.cn/assets/images/favicon.png",
        desc: "在线圆角图片制作工具",
        siteurl: "https://uutool.cn/img-radius/",
        tags: ["Anime", "Wallpaper"],
    },
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
