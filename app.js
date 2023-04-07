// 縣市行政區經緯度參數


var cityDistrictData = {
    "台北市": {
        "中正區": [25.032404, 121.518267],
        "大同區": [25.063424, 121.513042],
        "中山區": [25.069699, 121.542305],
        "松山區": [25.059991, 121.557588],
        "大安區": [25.026770, 121.543707],
        "萬華區": [25.026770, 121.497985],
        "信義區": [25.032834, 121.566688],
        "士林區": [25.091840, 121.524207],
        "北投區": [25.132419, 121.501182],
        "內湖區": [25.069699, 121.588998],
        "南港區": [25.054391, 121.606600],
        "文山區": [24.989786, 121.570458]
    },
    "新北市": {
        "萬里區": [25.167718, 121.689480],
        "金山區": [25.221883, 121.636427],
        "板橋區": [25.011865, 121.457024],
        "汐止區": [25.064462, 121.659634],
        "深坑區": [25.002329, 121.616330],
        "石碇區": [24.968129, 121.537535],
        "瑞芳區": [25.108419, 121.812947],
        "平溪區": [25.026133, 121.741621],
        "雙溪區": [25.039288, 121.865703],
        "貢寮區": [25.022331, 121.923255],
        "新店區": [24.975392, 121.537343],
        "坪林區": [24.937745, 121.710185],
        "烏來區": [24.865040, 121.551230],
        "永和區": [25.007332, 121.516394],
        "中和區": [24.995491, 121.493782],
        "土城區": [24.973979, 121.444267],
        "三峽區": [24.934339, 121.370766],
        "樹林區": [24.987855, 121.419483],
        "鶯歌區": [24.954201, 121.352432],
        "三重區": [25.062011, 121.488892],
        "新莊區": [25.036161, 121.450762],
        "泰山區": [25.055885, 121.433196],
        "林口區": [25.077531, 121.390207],
        "蘆洲區": [25.085176, 121.473952],
        "五股區": [25.080331, 121.438460],
        "八里區": [25.145078, 121.403680],
        "淡水區": [25.185958, 121.441379],
        "石門區": [25.291529, 121.568811],
        "三芝區": [25.259118, 121.499306],
    },
    "桃園市": {
        "桃園區": [24.993828, 121.301680],
        "中壢區": [24.953287, 121.225243],
        "大溪區": [24.880727, 121.290962],
        "楊梅區": [24.909489, 121.145862],
        "蘆竹區": [25.047766, 121.291382],
        "大園區": [25.063786, 121.194567],
        "龜山區": [24.998682, 121.348877],
        "八德區": [24.930390, 121.287063],
        "龍潭區": [24.863840, 121.216146],
        "平鎮區": [24.915222, 121.205671],
        "新屋區": [24.966644, 121.047953],
        "觀音區": [25.033409, 121.104063]
    },
    "台中市": {
        "中區": [24.142640, 120.681426],
        "東區": [24.137306, 120.697158],
        "南區": [24.121918, 120.665481],
        "西區": [24.143392, 120.664176],
        "北區": [24.153974, 120.681926],
        "西屯區": [24.183006, 120.616669],
        "南屯區": [24.141053, 120.617034],
        "北屯區": [24.176672, 120.688221],
        "豐原區": [24.249598, 120.719707],
        "東勢區": [24.259150, 120.828040],
        "大甲區": [24.345756, 120.623651],
        "清水區": [24.298109, 120.573480],
        "沙鹿區": [24.236372, 120.567907],
        "梧棲區": [24.246529, 120.537794],
        "后里區": [24.308614, 120.711862],
        "神岡區": [24.254477, 120.666336],
        "潭子區": [24.210177, 120.703271],
        "大雅區": [24.225628, 120.650765],
        "新社區": [24.184065, 120.810962],
        "石岡區": [24.278655, 120.783111],
        "外埔區": [24.327755, 120.653270],
        "大安區": [24.364672, 120.591171],
        "烏日區": [24.105432, 120.623079],
        "大肚區": [24.147694, 120.552906],
        "龍井區": [24.194533, 120.530058],
        "霧峰區": [24.061681, 120.697086],
        "太平區": [24.121098, 120.738959],
        "大里區": [24.099013, 120.677950],
        "和平區": [24.249131, 121.096950]
    },

    "台南市": {
        "中西區": [22.994701, 120.197476],
        "東區": [22.981079, 120.221382],
        "南區": [22.961241, 120.188426],
        "北區": [23.010075, 120.210845],
        "安平區": [22.993320, 120.161925],
        "安南區": [23.048237, 120.218248],
        "永康區": [23.026512, 120.253007],
        "歸仁區": [22.948831, 120.288354],
        "新化區": [23.037147, 120.302006],
        "左鎮區": [23.057318, 120.408784],
        "玉井區": [23.122887, 120.460133],
        "楠西區": [23.172191, 120.498759],
        "南化區": [23.109704, 120.543747],
        "仁德區": [22.942015, 120.245957],
        "關廟區": [22.958000, 120.327169],
        "龍崎區": [22.958186, 120.382855],
        "官田區": [23.193576, 120.327207],
        "麻豆區": [23.179030, 120.239142],
        "佳里區": [23.163852, 120.177929],
        "西港區": [23.125222, 120.203573],
        "七股區": [23.147197, 120.082602],
        "將軍區": [23.210041, 120.134598],
        "學甲區": [23.230444, 120.182862],
        "北門區": [23.267178, 120.121141],
        "新營區": [23.311248, 120.323162],
        "後壁區": [23.362998, 120.362920],
        "白河區": [23.350428, 120.414464],
        "東山區": [23.279707, 120.431746],
        "六甲區": [23.232199, 120.343901],
        "下營區": [23.236048, 120.264986],
        "柳營區": [23.268743, 120.370322],
        "鹽水區": [23.321751, 120.249736],
        "善化區": [23.131443, 120.297416],
        "大內區": [23.140010, 120.362969],
        "山上區": [23.099600, 120.384537],
        "新市區": [23.082981, 120.277050],
        "安定區": [23.101789, 120.227211],
        "善化區": [23.131443, 120.297416],
        "大內區": [23.140010, 120.362969],
        "山上區": [23.099600, 120.384537]
    },

    "高雄市": {
        "新興區": [22.630576, 120.306839],
        "前金區": [22.626419, 120.295428],
        "苓雅區": [22.621202, 120.328288],
        "鹽埕區": [22.625497, 120.282707],
        "鼓山區": [22.665355, 120.278428],
        "旗津區": [22.588268, 120.295156],
        "前鎮區": [22.589911, 120.314682],
        "三民區": [22.646986, 120.330973],
        "楠梓區": [22.716906, 120.330746],
        "小港區": [22.564500, 120.356426],
        "左營區": [22.674741, 120.320304],
        "仁武區": [22.702442, 120.347828],
        "大社區": [22.740086, 120.346057],
        "岡山區": [22.796784, 120.294994],
        "路竹區": [22.851724, 120.260823],
        "阿蓮區": [22.882676, 120.327612],
        "田寮區": [22.856636, 120.393361],
        "燕巢區": [22.791441, 120.361434],
        "橋頭區": [22.759447, 120.304901],
        "梓官區": [22.749355, 120.255288],
        "彌陀區": [22.783517, 120.245830],
        "永安區": [22.823276, 120.236968],
        "湖內區": [22.887790, 120.226033],
        "鳳山區": [22.625272, 120.358429],
        "大寮區": [22.605386, 120.395958],
        "林園區": [22.509722, 120.392620],
        "鳥松區": [22.665180, 120.369219],
        "大樹區": [22.710723, 120.411003],
        "旗山區": [22.883583, 120.479683],
        "美濃區": [22.898236, 120.543912],
        "六龜區": [23.016213, 120.633545],
        "內門區": [22.944313, 120.466647],
        "杉林區": [22.982400, 120.544263],
        "甲仙區": [23.080525, 120.592726],
        "桃源區": [23.160382, 120.766389],
        "那瑪夏區": [23.273853, 120.689468],
        "茂林區": [22.898236, 120.728756],
        "茄萣區": [22.906986, 120.196205]
    },


    "基隆市": {
        "仁愛區": [25.127593, 121.741526],
        "信義區": [25.129531, 121.769522],
        "中正區": [25.149108, 121.783962],
        "中山區": [25.155569, 121.729156],
        "安樂區": [25.129834, 121.729156],
        "暖暖區": [25.099627, 121.745861],
        "七堵區": [25.095623, 121.696373]
    },

    "新竹市": {
        "東區": [24.804361, 120.971994],
        "北區": [24.813529, 120.964600],
        "香山區": [24.765556, 120.927320]
    },
    "嘉義市": {
        "東區": [23.480425, 120.454513],
        "西區": [23.477182, 120.429888]
    },
    "新竹縣": {
        "竹北市": [24.838722, 121.009045],
        "湖口鄉": [24.903361, 121.049660],
        "新豐鄉": [24.869738, 120.996711],
        "新埔鎮": [24.826627, 121.063831],
        "關西鎮": [24.790886, 121.176263],
        "芎林鄉": [24.768141, 121.088669],
        "寶山鄉": [24.729647, 120.998149],
        "竹東鎮": [24.732183, 121.090725],
        "五峰鄉": [24.589466, 121.143259],
        "橫山鄉": [24.721278, 121.154404],
        "尖石鄉": [24.588071, 121.296303],
        "北埔鄉": [24.690347, 121.052672],
        "峨眉鄉": [24.684973, 121.014802]
    },
    "苗栗縣": {
        "苗栗市": [24.561472, 120.820556],
        "苑裡鎮": [24.439720, 120.653964],
        "通霄鎮": [24.489850, 120.680987],
        "竹南鎮": [24.682527, 120.882470],
        "頭份市": [24.688868, 120.906160],
        "後龍鎮": [24.614040, 120.792717],
        "卓蘭鎮": [24.309167, 120.846111],
        "大湖鄉": [24.382536, 120.862110],
        "公館鄉": [24.504361, 120.825694],
        "銅鑼鄉": [24.456039, 120.798219],
        "南庄鄉": [24.603022, 121.000657],
        "頭屋鄉": [24.575694, 120.846111],
        "三義鄉": [24.397861, 120.766111],
        "西湖鄉": [24.541389, 120.760556],
        "造橋鄉": [24.634167, 120.862500],
        "三灣鄉": [24.632778, 120.958056],
        "獅潭鄉": [24.531667, 120.917778],
        "泰安鄉": [24.492778, 120.952500]
    },
    "彰化縣": {
        "彰化市": [24.080000, 120.540000],
        "鹿港鎮": [24.056944, 120.435556],
        "和美鎮": [24.110833, 120.504444],
        "線西鄉": [24.131667, 120.459167],
        "伸港鄉": [24.148056, 120.481389],
        "福興鄉": [24.026111, 120.432778],
        "秀水鄉": [24.035833, 120.504167],
        "花壇鄉": [24.030556, 120.540000],
        "芬園鄉": [24.013889, 120.627778],
        "員林市": [23.959444, 120.573611],
        "溪湖鎮": [23.951111, 120.479444],
        "田中鎮": [23.864444, 120.588333],
        "大村鄉": [23.993056, 120.558889],
        "埔鹽鄉": [24.000278, 120.465833],
        "埔心鄉": [23.952778, 120.529167],
        "永靖鄉": [23.922778, 120.535556],
        "社頭鄉": [23.898333, 120.570833],
        "二水鄉": [23.805278, 120.618611],
        "北斗鎮": [23.865833, 120.520556],
        "二林鎮": [23.908333, 120.394444],
        "田尾鄉": [23.901944, 120.524167],
        "埤頭鄉": [23.882222, 120.464722],
        "芳苑鄉": [23.929167, 120.320833],
        "大城鄉": [23.852222, 120.320556],
        "竹塘鄉": [23.840278, 120.405556],
        "溪州鄉": [23.817500, 120.501111]
    },
    "南投縣": {
        "南投市": [23.919619, 120.670008],
        "埔里鎮": [23.962842, 120.967903],
        "草屯鎮": [23.975372, 120.689598],
        "竹山鎮": [23.756389, 120.677500],
        "集集鎮": [23.830278, 120.792222],
        "名間鄉": [23.838889, 120.709722],
        "鹿谷鄉": [23.744444, 120.752778],
        "中寮鄉": [23.928611, 120.839722],
        "魚池鄉": [23.873056, 120.918333],
        "國姓鄉": [24.033333, 120.849444],
        "水里鄉": [23.791389, 120.861389],
        "信義鄉": [23.708611, 120.982500],
        "仁愛鄉": [24.104722, 121.145556]
    },
    "雲林縣": {
        "斗六市": [23.711389, 120.544444],
        "斗南鎮": [23.676111, 120.478056],
        "虎尾鎮": [23.707778, 120.436111],
        "西螺鎮": [23.796111, 120.466389],
        "土庫鎮": [23.680278, 120.395833],
        "北港鎮": [23.584722, 120.303333],
        "古坑鄉": [23.630556, 120.564722],
        "大埤鄉": [23.646389, 120.431111],
        "莿桐鄉": [23.775556, 120.500278],
        "林內鄉": [23.751111, 120.614167],
        "二崙鄉": [23.807500, 120.409722],
        "崙背鄉": [23.757500, 120.348611],
        "麥寮鄉": [23.753611, 120.251944],
        "東勢鄉": [23.676944, 120.255556],
        "褒忠鄉": [23.698333, 120.308333],
        "臺西鄉": [23.702778, 120.202500],
        "元長鄉": [23.649444, 120.317778],
        "四湖鄉": [23.637778, 120.221944],
        "口湖鄉": [23.582222, 120.182500],
        "水林鄉": [23.572500, 120.239722]
    }
    ,
    "嘉義縣": {
        "太保市": [23.485556, 120.333611],
        "朴子市": [23.465278, 120.245833],
        "布袋鎮": [23.377500, 120.164722],
        "大林鎮": [23.601389, 120.470833],
        "民雄鄉": [23.556111, 120.426389],
        "溪口鄉": [23.604444, 120.400000],
        "新港鄉": [23.552778, 120.345278],
        "六腳鄉": [23.493889, 120.279444],
        "東石鄉": [23.458056, 120.153333],
        "義竹鄉": [23.401111, 120.235000],
        "鹿草鄉": [23.410833, 120.301944],
        "太保鄉": [23.485556, 120.333611],
        "水上鄉": [23.429167, 120.391944],
        "中埔鄉": [23.425278, 120.523056],
        "竹崎鄉": [23.523056, 120.544722],
        "梅山鄉": [23.555556, 120.612500],
        "番路鄉": [23.438056, 120.598333],
        "大埔鄉": [23.294444, 120.586389]
    },
    "屏東縣": {
        "屏東市": [22.673081, 120.488466],
        "潮州鎮": [22.550278, 120.538889],
        "東港鎮": [22.468056, 120.450000],
        "恆春鎮": [21.991389, 120.746111],
        "萬丹鄉": [22.582778, 120.483889],
        "長治鄉": [22.685833, 120.542500],
        "麟洛鄉": [22.650000, 120.525833],
        "九如鄉": [22.739444, 120.489722],
        "里港鄉": [22.800000, 120.494444],
        "鹽埔鄉": [22.752222, 120.561111],
        "高樹鄉": [22.826111, 120.601944],
        "萬巒鄉": [22.580833, 120.568611],
        "內埔鄉": [22.621944, 120.545278],
        "竹田鄉": [22.584444, 120.521111],
        "新埤鄉": [22.543056, 120.582222],
        "枋寮鄉": [22.399444, 120.606389],
        "新園鄉": [22.542500, 120.452500],
        "崁頂鄉": [22.514444, 120.508056],
        "林邊鄉": [22.431944, 120.515000],
        "南州鄉": [22.485833, 120.502500],
        "佳冬鄉": [22.427222, 120.552500],
        "琉球鄉": [22.339722, 120.369444],
        "車城鄉": [22.080278, 120.716111],
        "滿州鄉": [22.025278, 120.839722],
        "枋山鄉": [22.261111, 120.655833],
        "三地門鄉": [22.710556, 120.639444],
        "霧台鄉": [22.756389, 120.810000],
        "瑪家鄉": [22.682778, 120.689722],
        "泰武鄉": [22.589444, 120.841389],
        "來義鄉": [22.529167, 120.631389],
        "春日鄉": [22.396111, 120.628333],
        "獅子鄉": [22.246389, 120.731667],
        "牡丹鄉": [21.932500, 120.762778],
    },
    "宜蘭縣": {
        "宜蘭市": [24.759722, 121.754722],
        "羅東鎮": [24.677222, 121.771944],
        "蘇澳鎮": [24.580000, 121.841389],
        "頭城鎮": [24.857222, 121.823056],
        "礁溪鄉": [24.823333, 121.772222],
        "壯圍鄉": [24.743611, 121.799722],
        "員山鄉": [24.741389, 121.720833],
        "冬山鄉": [24.637778, 121.792500],
        "五結鄉": [24.682222, 121.795278],
        "三星鄉": [24.665833, 121.666389],
        "大同鄉": [24.675556, 121.605556],
        "南澳鄉": [24.443889, 121.842778]
    },
    "花蓮縣": {
        "花蓮市": [24.000000, 121.600000],
        "鳳林鎮": [23.745833, 121.459167],
        "玉里鎮": [23.371111, 121.332778],
        "新城鄉": [24.057222, 121.629167],
        "吉安鄉": [23.961667, 121.565278],
        "壽豐鄉": [23.870833, 121.530556],
        "光復鄉": [23.663056, 121.425833],
        "豐濱鄉": [23.575000, 121.507778],
        "瑞穗鄉": [23.511111, 121.399444],
        "萬榮鄉": [23.727222, 121.318056],
        "富里鄉": [23.196111, 121.298889],
        "秀林鄉": [24.106389, 121.618056],
        "卓溪鄉": [23.340278, 121.180000]
    },
    "臺東縣": {
        "臺東市": [22.751111, 121.148889],
        "成功鎮": [23.117500, 121.365556],
        "關山鎮": [23.045833, 121.163889],
        "卑南鄉": [22.786111, 121.000556],
        "鹿野鄉": [22.937778, 121.123056],
        "池上鄉": [23.120000, 121.216111],
        "東河鄉": [22.973611, 121.251389],
        "長濱鄉": [23.327222, 121.436111],
        "太麻里鄉": [22.587778, 120.985000],
        "大武鄉": [22.340833, 120.901111],
        "達仁鄉": [22.288056, 120.881389],
        "綠島鄉": [22.658611, 121.493611],
        "蘭嶼鄉": [22.038056, 121.558056],
        "海端鄉": [23.104167, 121.019444],
        "延平鄉": [22.904722, 121.084444],
        "金峰鄉": [22.586667, 120.939167],
    },
    "澎湖縣": {
        "馬公市": [23.565278, 119.563056],
        "湖西鄉": [23.584444, 119.656389],
        "白沙鄉": [23.639167, 119.586389],
        "西嶼鄉": [23.603611, 119.502778],
        "望安鄉": [23.354167, 119.502778],
        "七美鄉": [23.203611, 119.423611]
    }





};

// 初始化地圖
var map = L.map('map', {
    maxZoom: 19 // 設定最大縮放級別
}).setView([25.026770, 121.543707], 13);
L.drawLocal.draw.toolbar.buttons.marker = '定點座標';
L.drawLocal.draw.toolbar.buttons.polygon = '開始繪製地圖多邊形';
L.drawLocal.draw.toolbar.buttons.rectangle = '開始繪製長方形';

L.drawLocal.draw.handlers.marker.tooltip.start = '點擊放置定點座標';

L.drawLocal.draw.handlers.polygon.tooltip.start = '點擊滑鼠繪製多邊形';
L.drawLocal.draw.handlers.polygon.tooltip.cont = '點擊滑鼠繼續繪製多邊形';
L.drawLocal.draw.handlers.polygon.tooltip.end = '點擊下一個座標或是點擊第一個座標完成多邊形';

L.drawLocal.draw.toolbar.undo.text = '刪除上一個繪點';
L.drawLocal.draw.toolbar.finish.text = '完成描繪';
L.drawLocal.draw.toolbar.actions.text = '取消描繪';

L.drawLocal.edit.toolbar.buttons.edit = '編輯現有圖層';
L.drawLocal.edit.toolbar.buttons.editDisabled = '目前沒有已繪製圖層可供編輯';
L.drawLocal.edit.toolbar.buttons.remove = '移除現有圖層';
L.drawLocal.edit.toolbar.buttons.removeDisabled = '目前沒有已繪製圖層可供刪除';
L.drawLocal.edit.toolbar.actions.save.text = '儲存變更';
L.drawLocal.edit.toolbar.actions.cancel.text = '取消變更';
L.drawLocal.edit.toolbar.actions.clearAll.text = '移除全部圖層';
L.drawLocal.edit.handlers.edit.tooltip.subtext = '點擊左側取消變更即可取消改變';
L.drawLocal.edit.handlers.edit.tooltip.text = '拖曳圖層節點即可編輯圖層';
L.drawLocal.edit.handlers.remove.tooltip.text = '於圖層上點擊即可移除';

// 基本圖層
var baseLayers = {

    "TaiwanMap": L.tileLayer('https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: 'TaiwanMap'
    }),
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }),

    
};




// 疊加圖層
var overlayLayers = {

    "村里界": L.tileLayer('https://wmts.nlsc.gov.tw/wmts/Village/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '村里界'
    }),
    "地段外圍圖(段籍圖)":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/LANDSECT/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '地段外圍圖(段籍圖)'
    }),
    "國土利用現況調查110年更新區":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/LUIMAP110/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '國土利用現況調查110年更新區'
    }),
    "地段外圍圖(段籍圖)(類別)":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/LANDSECT2/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '地段外圍圖(段籍圖)(類別)'
    }),
    "國土利用現況調查-3類交通":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/LUIMAP03/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '國土利用現況調查-3類交通'
    }),
    "國土利用現況調查-1類農業":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/LUIMAP01/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '國土利用現況調查-1類農業'
    }),
    "公有土地地籍圖":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/LAND_OPENDATA/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '公有土地地籍圖'
    }),
    "非都市土地使用地類別圖":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/nURBAN2/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '非都市土地使用地類別圖'
    }),
    "非都市土地使用分區圖":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/nURBAN1/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '非都市土地使用分區圖'
    }),
    "1/5000像片基本圖111":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_111/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '1/5000像片基本圖111'
    }),
    "1/100000地形圖111":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/TOPO10M_111/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '1/100000地形圖111'
    }),
    "110年正射影像圖":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/PHOTO2021/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '110年正射影像圖'
    }),

    "土壤液化潛勢_中級":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/SoilLiquefaction2/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '土壤液化潛勢_中級'
    }),
    "正射影像(混合)":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/PHOTO_MIX/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '正射影像(混合)'
    }),
    "道路路網":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/ROAD/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '道路路網'
    }),

    "地質敏感區":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/GeoSensitive/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '地質敏感區'
    }),

    "正射影像圖(通用)":  L.tileLayer('https://wmts.nlsc.gov.tw/wmts/PHOTO2/default/GoogleMapsCompatible/{z}/{y}/{x}', {
        maxZoom: 19,
        id: '正射影像圖(通用)'
    }),


};

// 將預設基本圖層添加到地圖
baseLayers.TaiwanMap.addTo(map);

// 將預設疊加圖層添加到地圖
// overlayLayers.GeoSensitive.addTo(map);
// overlayLayers.Village.addTo(map);
// overlayLayers.Landsect.addTo(map);

// 創建圖層控制器並添加到地圖
L.control.layers(baseLayers, overlayLayers).addTo(map);



// 初始化繪圖工具
var drawnItems = new L.FeatureGroup().addTo(map);
var drawControl = new L.Control.Draw({
    draw: {
        polyline: false,
        polygon: true,
        circle: false,
        marker: true,
        circlemarker: false,
        rectangle: false
    },
    edit: {
        featureGroup: drawnItems
    }
}).addTo(map);





// 在地圖上創建按鈕的函數
function createFetchDataButton(latLng, geojson) {
    // 自定義按鈕圖標
    var fetchDataBtnIcon = L.divIcon({
        className: 'fetch-data-btn-icon',
        html: '<button class="fetch-data-btn">獲取資料</button>'
    });

    // 創建按鈕圖標並綁定點擊事件
    var fetchDataBtnMarker = L.marker(latLng, {
        icon: fetchDataBtnIcon,
        draggable: false,
        zIndexOffset: 1000
    });

    // 點擊按鈕時的事件處理器
    fetchDataBtnMarker.on('click', function (e) {
        // 這裡是你要發送 POST 請求的遠端伺服器地址
        var url = 'https://diablo-test.yeshome.net.tw/spgateway/jacklintest/';
        // var url = 'http://125.229.69.223:8881/polygon/insidePolygon/';

        // 將傳入的 geojson 封裝到 FeatureCollection 中
        var modifiedGeojson = {
            type: 'FeatureCollection',
            features: [geojson]
        };

        // 創建 FormData 並添加 geojson 字段
        var formData = new FormData();
        formData.append('geojson', JSON.stringify(modifiedGeojson));

        // 發送 POST 請求並處理回應
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('伺服器錯誤，請稍後重試。');
                }
            })
            .then(function (data) {
                // 在這裡處理返回的數據，並將其顯示在頁面上
                console.log('獲取到的資料：', data);

                // 開啟新視窗
                var newWindow = window.open('res.html', '_blank');

                if (!newWindow) {
                    alert('無法開啟新視窗，請檢查瀏覽器的彈出窗口設置。');
                } else {
                    // 當新視窗載入完成後，使用 postMessage 將數據傳遞給新視窗
                    newWindow.addEventListener('load', function () {
                        newWindow.postMessage(data, '*');
                    });
                }
            })
            .catch(function (error) {
                console.error('獲取資料時出現錯誤：', error);
                var newWindow = window.open('res.html', '_blank');

                if (!newWindow) {
                    alert('無法開啟新視窗，請檢查瀏覽器的彈出窗口設置。');
                } else {
                    // 當新視窗載入完成後，使用 postMessage 將空數據或錯誤信息傳遞給新視窗
                    newWindow.addEventListener('load', function () {
                        newWindow.postMessage({ error: '獲取資料時出現錯誤' }, '*');
                    });
                }
            });
    });

    return fetchDataBtnMarker;
}


var buttonLayerMap = new Map();

function placeButtonNearPolygon(layer) {
    var bounds = layer.getBounds();
    var buttonLatLng = bounds.getSouthEast();
    var geojson = layer.toGeoJSON(); // 獲取 geojson
    var fetchDataBtnMarker = createFetchDataButton(buttonLatLng, geojson); // 傳遞 geojson
    fetchDataBtnMarker.addTo(map);
    // 將按鈕與圖層之間的對應關係儲存到 Map 物件中
    buttonLayerMap.set(layer, fetchDataBtnMarker);
}



// 處理繪圖完成事件
map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;
    drawnItems.addLayer(layer);

    // 判斷圖層類型是 polygon 還是 marker
    if (event.layerType === 'polygon') {
        // 輸出polygon的geojson
        var geojson = layer.toGeoJSON();
        console.log(JSON.stringify(geojson));

        // 在多邊形旁邊創建按鈕
        placeButtonNearPolygon(layer);
    } else if (event.layerType === 'marker') {
        // 獲取 marker 的座標
        var latLng = layer.getLatLng();
        var geojson = layer.toGeoJSON(); // 獲取 geojson
        var fetchDataBtnMarker = createFetchDataButton(latLng, geojson); // 傳遞 geojson
        fetchDataBtnMarker.addTo(map);
        // 將按鈕與圖層之間的對應關係儲存到 Map 物件中
        buttonLayerMap.set(layer, fetchDataBtnMarker);
    }
});


map.on(L.Draw.Event.EDITED, function (event) {
    var layers = event.layers;
    layers.eachLayer(function (layer) {
        // 移除舊的按鈕
        var oldFetchDataBtnMarker = buttonLayerMap.get(layer);
        if (oldFetchDataBtnMarker) {
            map.removeLayer(oldFetchDataBtnMarker);
            buttonLayerMap.delete(layer);
        }

        if (layer instanceof L.Marker) {
            // 輸出 Marker 的 GeoJSON
            var geojson = layer.toGeoJSON();
            console.log('編輯:', JSON.stringify(geojson));

            // 獲取 marker 的座標
            var latLng = layer.getLatLng();
            var fetchDataBtnMarker = createFetchDataButton(latLng, geojson); // 傳遞 geojson
            fetchDataBtnMarker.addTo(map);
            // 將按鈕與圖層之間的對應關係儲存到 Map 物件中
            buttonLayerMap.set(layer, fetchDataBtnMarker);
        } else if (layer instanceof L.Polygon) {
            // 輸出 Polygon 的 GeoJSON
            var geojson = layer.toGeoJSON();
            console.log('編輯:', JSON.stringify(geojson));

            // 在多邊形旁邊創建按鈕
            placeButtonNearPolygon(layer);
        }
    });
});


// 處理刪除圖層事件
map.on(L.Draw.Event.DELETED, function (event) {
    var layers = event.layers;
    layers.eachLayer(function (layer) {
        // 在這裡找到與圖層相關聯的按鈕，並將其從地圖上移除
        var fetchDataBtnMarker = buttonLayerMap.get(layer);
        if (fetchDataBtnMarker) {
            map.removeLayer(fetchDataBtnMarker);
            buttonLayerMap.delete(layer);
        }
    });
});



var citySelect = document.getElementById('city-select');
for (var city in cityDistrictData) {
    var option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
}

citySelect.addEventListener('change', function () {
    var districtSelect = document.getElementById('district-select');
    districtSelect.innerHTML = '<option value="">請選擇行政區</option>';
    var city = citySelect.value;
    if (city) {
        var districts = cityDistrictData[city];
        for (var district in districts) {
            var option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        }
    }
});



document.getElementById('district-select').addEventListener('change', function () {
    var city = citySelect.value;
    var district = this.value;
    if (city && district) {
        var latLng = cityDistrictData[city][district];
        map.setView(latLng, 16);
    }
});


function getLocationAndSetMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            map.setView([lat, lng], 16); // 將地圖導向到用戶的位置，並將縮放級別設置為13
        }, function (error) {
            console.error('無法獲取位置信息：', error);
        });
    } else {
        console.error('瀏覽器不支持地理定位。');
    }
}



window.addEventListener('load', function () {
    getLocationAndSetMap();
});