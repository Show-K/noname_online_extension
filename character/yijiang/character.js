const characters = {
	xiahoumao: ["male", "wei", 4, ["tongwei", "cuguo"], ["name:夏侯|楙"]],
	chenshi: ["male", "shu", 4, ["qingbei"]],
	sunli: ["male", "wei", 4, ["kangli"]],
	feiyao: ["male", "wei", 4, ["zhenfeng"]],
	wuanguo: ["male", "qun", 4, ["diezhang", "duanwan"]],
	hanlong: ["male", "wei", 4, ["duwang", "cibei"]],
	yj_qiaozhou: ["male", "shu", 3, ["shiming", "jiangxi"]],
	yj_sufei: ["male", "wu", 4, ["shuojian"]],
	liwan: ["female", "wei", 3, ["liandui", "biejun"]],
	zhugeshang: ["male", "shu", 3, ["sangu", "yizu"], ["name:诸葛|尚"]],
	kebineng: ["male", "qun", 4, ["kousheng"]],
	lukai: ["male", "wu", 4, ["lkbushi", "lkzhongzhuang"]],
	xin_fazheng: ["male", "shu", 3, ["xinxuanhuo", "xinenyuan"]],
	guanzhang: ["male", "shu", 4, ["fuhun"], ["name:关|兴-张|苞"]],
	wangyi: ["female", "wei", 3, ["zhenlie", "miji"]],
	caozhang: ["male", "wei", 4, ["new_jiangchi"]],
	guohuai: ["male", "wei", 4, ["rejingce"]],
	zhangchunhua: ["female", "wei", 3, ["jueqing", "shangshi"]],
	caozhi: ["male", "wei", 3, ["luoying", "jiushi"]],
	caochong: ["male", "wei", 3, ["chengxiang", "renxin"]],
	xunyou: ["male", "wei", 3, ["qice", "zhiyu"], ["clan:颍川荀氏"]],
	xin_xushu: ["male", "shu", 3, ["xinwuyan", "xinjujian"], ["border:wei"]],
	xin_masu: ["male", "shu", 3, ["olsanyao", "rezhiman"]],
	zhuran: ["male", "wu", 4, ["danshou"]],
	xusheng: ["male", "wu", 4, ["xinpojun"]],
	wuguotai: ["female", "wu", 3, ["ganlu", "buyi"]],
	lingtong: ["male", "wu", 4, ["xuanfeng"]],
	liubiao: ["male", "qun", 3, ["rezishou", "zongshi"]],
	yufan: ["male", "wu", 3, ["zhiyan", "zongxuan"]],
	chengong: ["male", "qun", 3, ["mingce", "zhichi"]],
	bulianshi: ["female", "wu", 3, ["old_anxu", "zhuiyi"]],
	handang: ["male", "wu", 4, ["gongji", "jiefan"]],
	fuhuanghou: ["female", "qun", 3, ["qiuyuan", "zhuikong"]],
	zhonghui: ["male", "wei", 4, ["quanji", "zili"], ["clan:颍川钟氏"]],
	jianyong: ["male", "shu", 3, ["qiaoshui", "jyzongshi"]],
	old_madai: ["male", "shu", 4, ["mashu", "qianxi"]],
	liufeng: ["male", "shu", 4, ["xiansi"]],
	manchong: ["male", "wei", 3, ["junxing", "yuce"]],
	chenqun: ["male", "wei", 3, ["pindi", "faen"]],
	sunluban: ["female", "wu", 3, ["chanhui", "jiaojin"]],
	guyong: ["male", "wu", 3, ["shenxing", "olbingyi"]],
	caifuren: ["female", "qun", 3, ["qieting", "xianzhou"], ["name:蔡|null"]],
	yj_jushou: ["male", "qun", 3, ["jianying", "shibei"]],
	zhangsong: ["male", "shu", 3, ["qiangzhi", "xiantu"]],
	zhuhuan: ["male", "wu", 4, ["fenli", "pingkou"]],
	xiahoushi: ["female", "shu", 3, ["qiaoshi", "yanyu"], ["name:夏侯|null"]],

	panzhangmazhong: ["male", "wu", 4, ["duodao", "anjian"], ["name:潘|璋-马|忠"]],
	zhoucang: ["male", "shu", 4, ["xinzhongyong"]],
	guanping: ["male", "shu", 4, ["longyin"]],
	liaohua: ["male", "shu", 4, ["dangxian", "fuli"]],
	chengpu: ["male", "wu", 4, ["lihuo", "chunlao"]],
	gaoshun: ["male", "qun", 4, ["xinxianzhen", "jinjiu"]],
	caozhen: ["male", "wei", 4, ["xinsidi"]],
	wuyi: ["male", "shu", 4, ["benxi"], ["clan:陈留吴氏"]],
	hanhaoshihuan: ["male", "wei", 4, ["shenduan", "yonglve"], ['name:韩|浩-史|涣']],

	caorui: ["male", "wei", 3, ["huituo", "mingjian", "xingshuai"], ["zhu"]],
	caoxiu: ["male", "wei", 4, ["qianju", "qingxi"]],
	zhongyao: ["male", "wei", 3, ["huomo", "zuoding"], ["clan:颍川钟氏"]],
	liuchen: ["male", "shu", 4, ["zhanjue", "qinwang"], ["zhu"]],
	zhangyi: ["male", "shu", 4, ["wurong", "shizhi"]],
	sunxiu: ["male", "wu", 3, ["yanzhu", "xingxue", "xinzhaofu"], ["zhu"]],
	zhuzhi: ["male", "wu", 4, ["xinanguo"]],
	quancong: ["male", "wu", 4, ["yaoming"]],
	gongsunyuan: ["male", "qun", 4, ["huaiyi"], ["name:公孙|渊"]],
	guotufengji: ["male", "qun", 3, ["jigong", "shifei"], ["name:郭|图-逢|纪"]],

	xin_liru: ["male", "qun", 3, ["xinjuece", "xinmieji", "xinfencheng"]],

	guohuanghou: ["female", "wei", 3, ["jiaozhao", "danxin"], ["name:郭|null"]],
	liuyu: ["male", "qun", 2, ["xinzhige", "xinzongzuo"]],
	liyan: ["male", "shu", 3, ["dcduliang", "fulin"]],
	sundeng: ["male", "wu", 4, ["kuangbi"]],

	cenhun: ["male", "wu", 4, ["jishe", "lianhuo"]],
	huanghao: ["male", "shu", 3, ["qinqing", "huisheng"]],
	zhangrang: ["male", "qun", 3, ["taoluan"], ["sex:male_castrated"]],
	sunziliufang: ["male", "wei", 3, ["guizao", "jiyu"], ['name:孙|资-刘|放']],

	xinxianying: ["female", "wei", 3, ["zhongjian", "caishi"]],
	wuxian: ["female", "shu", 3, ["fumian", "daiyan"], ["clan:陈留吴氏"]],
	xushi: ["female", "wu", 3, ["wengua", "fuzhu"], ["name:徐|null"]],
	caojie: ["female", "qun", 3, ["shouxi", "huimin"]],

	caiyong: ["male", "qun", 3, ["bizhuan", "tongbo"]],
	jikang: ["male", "wei", 3, ["qingxian", "juexiang"]],
	qinmi: ["male", "shu", 3, ["jianzheng", "zhuandui", "tianbian"]],
	xuezong: ["male", "wu", 3, ["funan", "xinjiexun"]],

	old_huaxiong: ["male", "qun", 6, ["shiyong"]],

	yujin: ["male", "wei", 4, ["rezhenjun"], ["die:ol_yujin.mp3"]],

	linghuyu: ["male", "wei", 4, ["xvzhi"], ["name:令狐|愚"]],
	yj_simafu: ["male", "wei", 3, ["beiyu", "duchi"], ["name:司马|孚"]],
	yj_xuangongzhu: ["female", "wei", 3, ["yjqimei", "yjzhuiji"], ["name:司马|null"]],
	xukun: ["male", "wu", 4, ["fazhu"]],
};

export default characters;
