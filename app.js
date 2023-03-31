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
        "板橋區": [25.011864, 121.457968],
        "三峽區": [24.934339, 121.368905],
        "中和區": [24.999457, 121.498480],
        "永和區": [25.007636, 121.516306],
        "土城區": [24.972201, 121.443348],
        "新莊區": [25.037652, 121.432939],
        "樹林區": [24.989786, 121.421029],
        "鶯歌區": [24.954180, 121.353771],
        "三重區": [25.062361, 121.490736],
        "新店區": [24.977147, 121.541202],
        "蘆洲區": [25.082743, 121.471633],
        "淡水區": [25.171610, 121.446101]
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
        "苗栗市": [24.560994, 120.820068],
        "頭份市": [24.685573, 120.912186],
        "竹南鎮": [24.685573, 120.877624],
        "後龍鎮": [24.614602, 120.795003],
        "通霄鎮": [24.491154, 120.678306],
        "苑裡鎮": [24.441926, 120.653654],
    }
};

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


