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

// 處理繪圖完成事件
map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;
    drawnItems.addLayer(layer);

    // 輸出polygon的geojson
    var geojson = layer.toGeoJSON();
    console.log(JSON.stringify(geojson));
});


map.on(L.Draw.Event.EDITED, function (event) {
    var layers = event.layers;
    layers.eachLayer(function (layer) {
        // 輸出 Polygon 的 GeoJSON
        var geojson = layer.toGeoJSON();
        console.log('編輯:', JSON.stringify(geojson));
    });
});

