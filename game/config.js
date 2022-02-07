window.config={
	extension_sources:{
		Coding:'https://show-kadot.coding.net/p/noname/d/noname-extension/git/raw/super-smash-tabletop/',
		GitHub:'https://raw.githubusercontent.com/Show-K/noname-extension/super-smash-tabletop/',
	},
	extension_source:'Coding',
	forbidai:['ns_liuzhang','yuji','re_yuji'],
	forbidai_user:[],
	forbidall:[],
	forbidstone:['zhugedan','pal_xuanxiao','hs_malfurion','lusu','chenlin','hs_siwangzhiyi',
		'gjqt_bailitusu','yuanshao','swd_anka','swd_nicole','daqiao','re_daqiao','hs_xuanzhuanjijia',
		'zhuran','huatuo','swd_tuwei','hs_guldan','wangyi','caoang','swd_guyue','swd_rongshuang',
		'swd_jiangziya','guojia','re_guojia','shen_caocao','swd_qiner','caopi','hs_yngvar','guansuo',
		'gjqt_aruan','swd_hanluo','hs_anduin','swd_huanglei','yxs_yujix','yxs_luzhishen','swd_muyun','ow_tianshi',
		'pal_yuejinzhao','hs_antonidas','xushi','hs_lreno'
	],
	forbidchess:['hetaihou','swd_kangnalishi'],
	forbidboss:['caiwenji','gjqt_aruan','pal_xuanxiao','swd_hupo'],
	forbiddouble:['zhugedan','swd_kangnalishi','dongzhuo','wutugu','hs_siwangzhiyi','hs_ronghejuren','hs_shanlingjuren'],
	forbidthreecard:['qiankunbiao','shenhuofeiya','gw_ciguhanshuang','gw_birinongwu','gw_qinpendayu','gw_poxiao'],
	//zhinang_tricks:['guohe','wuxie','wuzhong','dongzhuxianji'],
	//connect_zhinang_tricks:['guohe','wuxie','wuzhong','dongzhuxianji'],
	zhinang_tricks:[],
	connect_zhinang_tricks:[],
	all:{
		sgscharacters:['standard','shenhua','xinghuoliaoyuan','refresh','yijiang','sp','sp2','extra','old','mobile','tw','yingbian','offline'],
		sgscards:['standard','extra','sp','guozhan','zhulu','yingbian','yongjian'],
		sgsmodes:['identity','guozhan','versus','doudizhu','single','brawl','connect'],
		stockmode:['identity','guozhan','versus','boss','doudizhu','single','chess','stone','connect','brawl','tafang'],
		stockextension:['boss','cardpile','coin','wuxing'],
		layout:['default','newlayout'],
		theme:['woodden','music','simple'],
		card_font:['fzhtk'],
		double_hp:['hejiansan','pingjun','zuidazhi','zuixiaozhi','zonghe'],
		image_background_filter:['default','blur','gray','sepia','invert','saturate','contrast','hue','brightness']
	},

	game:'sgs',
	duration:500,
	hoveration:1000,
	doubleclick_intro:true,
	cheat:false,
	volumn_background:0,
	volumn_audio:8,

	connect_avatar:'sst_mario',
	connect_nickname:'无名玩家',
	config_menu:true,
	auto_popped_config:true,
	auto_popped_history:false,
	auto_skill:false,
	auto_confirm:false,
	enable_drag:true,
	enable_pressure:false,
	pressure_taptic:true,
	hover_handcard:true,
	hover_all:true,
	right_info:true,
	longpress_info:true,
	long_info:true,
	background_music:'music_battlefield',
	background_audio:true,
	background_speak:true,
	glow_phase:'yellow',
	die_move:'flip',

	skin:{},
	gameRecord:{},
	extensionInfo:{},
	autoskilllist:[],
	hiddenModePack:[],
	hiddenCharacterPack:[],
	hiddenCardPack:[],
	hiddenPlayPack:[],
	hiddenBackgroundPack:[],
	customBackgroundPack:[],
	favouriteCharacter:[],
	favouriteMode:[],
	recentIP:[],
	vintageSkills:[],
	alteredSkills:[],
	brokenFile:[],

	theme:'simple',
	layout:'nova',
	card_style:'ol',
	cardback_style:'noname',
	hp_style:'default',

	image_character:'default',
	image_background:'standard_bg',

	asset_image:true,
	asset_font:true,

	card_font:'fzhtk',
	show_statusbar_ios:'off',
	show_statusbar_android:false,
	show_name:true,
	show_replay:true,
	show_round_menu:true,
	show_pause:true,
	show_auto:true,
	show_volumn:true,
	show_cardpile:true,
	only_fullskin:true,
	show_connect:true,
	show_wuxie:false,
	show_wuxie_self:true,
	show_stat:true,
	show_playerids:true,
	show_scrollbar:false,
	mousewheel:true,
	fold_card:true,
	threed_card:false,
	vertical_scroll:false,
	handcard_scroll:0,
	animation:true,
	skill_animation_type:'default',
	paused:false,
	title:false,
	button_press:true,
	damage_shake:true,
	log_highlight:true,
	player_border:'normal',
	radius_size:'default',

	modeconfig:false,
	gameconfig:false,
	appearence:false,
	video:'10000',
	coin:0,

	intro:'i',
	right_click:'pause',
	sort:'type_sort',

	cards:['sst','standard','extra'],
	characters:['sst'],
	connect_characters:['diy'],
	connect_cards:['huanlekapai','guozhan','sp','zhulu','yingbian','yongjian'],
	plays:[],
	extensions:['在线更新','十周年UI','导入助手'],
	banned:[],
	bannedcards:[],
	forbidlist:[],
	bannedpile:{},
	customcardpile:{},
	addedpile:{},

	mode:'identity',
	mode_config:{
		global:{
			player_number:8,
			auto_identity:'off',
			double_character:false,
			save_progress:true,
			free_choose:true,
			swap:true,
			change_identity:true,
			battle_number:3,
			double_hp:'pingjun'
		},
		identity:{
			identity:[
				['zhu','fan'],
				['zhu','nei','fan'],
				['zhu','zhong','nei','fan'],
				['zhu','zhong','nei','fan','fan'],
				['zhu','zhong','nei','fan','fan','fan'],
				['zhu','zhong','zhong','nei','fan','fan','fan'],
				['zhu','zhong','zhong','nei','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan'],
				['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','nei','fan','fan','fan','fan','fan','fan','fan','fan']
			],
			choice:{
				zhu:3,
				zhong:4,
				nei:5,
				fan:3,
			},
			show_identity:true,
			difficulty:'normal',
			dierestart:true
		},
		guozhan:{
			difficulty:'normal',
			initshow_draw:'mark',
			dierestart:true
		}
	},
	current_mode:{},
	customforbid:[],
	forbid:[
	]
};
