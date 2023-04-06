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
    "新竹縣": {
        "竹北市": [24.839233, 121.002012],
        "竹東鎮": [24.740726, 121.091976],
        "新埔鎮": [24.824922, 121.105458],
        "關西鎮": [24.789423, 121.178544],
        "湖口鄉": [24.874300, 121.044707],
        "新豐鄉": [24.904678, 120.996954],
        "芎林鄉": [24.774251, 121.082614],
        "橫山鄉": [24.720960, 121.117536],
        "北埔鄉": [24.696018, 121.052933],
        "寶山鄉": [24.725989, 120.996954],
        "峨眉鄉": [24.686455, 121.018692],
        "尖石鄉": [24.590920, 121.289284]
    },
    "苗栗縣": {
        "苗栗市": [24.561472, 120.820038],
        "頭份市": [24.686013, 120.908997],
        "竹南鎮": [24.682122, 120.877874],
        "後龍鎮": [24.615926, 120.786727],
        "通霄鎮": [24.493271, 120.678341],
        "苑裡鎮": [24.441642, 120.653857],
        "卓蘭鎮": [24.312694, 120.831600],
        "三義鄉": [24.393178, 120.750947],
        "西湖鄉": [24.538202, 120.760200],
        "獅潭鄉": [24.530783, 120.919682],
        "泰安鄉": [24.446665, 120.899307],
        "造橋鄉": [24.632636, 120.861493],
        "三灣鄉": [24.639877, 120.948703],
        "頭屋鄉": [24.575942, 120.846490],
        "公館鄉": [24.503743, 120.823572],
        "大湖鄉": [24.422775, 120.866982],
        "銅鑼鄉": [24.455413, 120.798367],
        "南庄鄉": [24.599805, 121.000025]
    }


};

// 初始化地圖
var map = L.map('map').setView([23, 121], 13);
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

// 添加地圖圖層
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 初始化繪圖工具
var drawnItems = new L.FeatureGroup().addTo(map);
var drawControl = new L.Control.Draw({
    draw: {
        polyline: false,
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
        var url = 'https://your-remote-server.com/api/endpoint';
        console.log(geojson)
        // 發送 POST 請求並處理回應
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(geojson)
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
                // 你可以根據需要修改以下代碼以將數據顯示在頁面的指定位置
                var outputElement = document.getElementById('output');
                if (outputElement) {
                    outputElement.innerHTML = JSON.stringify(data, null, 2);
                }
            })
            .catch(function (error) {
                console.error('獲取資料時出現錯誤：', error);
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

    // 輸出polygon的geojson
    var geojson = layer.toGeoJSON();
    console.log(JSON.stringify(geojson));

    // 在多邊形旁邊創建按鈕
    placeButtonNearPolygon(layer);
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

        // 輸出 Polygon 的 GeoJSON
        var geojson = layer.toGeoJSON();
        console.log('編輯:', JSON.stringify(geojson));

        // 在多邊形旁邊創建按鈕
        placeButtonNearPolygon(layer);
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


