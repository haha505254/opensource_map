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