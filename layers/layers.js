ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([76.080057, 11.617323, 76.235535, 11.712237]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BOUNDARY_1 = new ol.format.GeoJSON();
var features_BOUNDARY_1 = format_BOUNDARY_1.readFeatures(json_BOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_1.addFeatures(features_BOUNDARY_1);
var lyr_BOUNDARY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_1, 
                style: style_BOUNDARY_1,
                popuplayertitle: "BOUNDARY",
                interactive: false,
                title: '<img src="styles/legend/BOUNDARY_1.png" /> BOUNDARY'
            });
var format_Anganawadi1_2 = new ol.format.GeoJSON();
var features_Anganawadi1_2 = format_Anganawadi1_2.readFeatures(json_Anganawadi1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Anganawadi1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anganawadi1_2.addFeatures(features_Anganawadi1_2);
var lyr_Anganawadi1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anganawadi1_2, 
                style: style_Anganawadi1_2,
                popuplayertitle: "Anganawadi1",
                interactive: false,
                title: '<img src="styles/legend/Anganawadi1_2.png" /> Anganawadi1'
            });
var format_CommunityHall1_3 = new ol.format.GeoJSON();
var features_CommunityHall1_3 = format_CommunityHall1_3.readFeatures(json_CommunityHall1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CommunityHall1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityHall1_3.addFeatures(features_CommunityHall1_3);
var lyr_CommunityHall1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityHall1_3, 
                style: style_CommunityHall1_3,
                popuplayertitle: "CommunityHall1",
                interactive: false,
                title: '<img src="styles/legend/CommunityHall1_3.png" /> CommunityHall1'
            });
var format_Dustbin1_4 = new ol.format.GeoJSON();
var features_Dustbin1_4 = format_Dustbin1_4.readFeatures(json_Dustbin1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dustbin1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dustbin1_4.addFeatures(features_Dustbin1_4);
var lyr_Dustbin1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dustbin1_4, 
                style: style_Dustbin1_4,
                popuplayertitle: "Dustbin1",
                interactive: false,
                title: '<img src="styles/legend/Dustbin1_4.png" /> Dustbin1'
            });
var format_Location_5 = new ol.format.GeoJSON();
var features_Location_5 = format_Location_5.readFeatures(json_Location_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Location_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_5.addFeatures(features_Location_5);
var lyr_Location_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_5, 
                style: style_Location_5,
                popuplayertitle: "Location",
                interactive: true,
                title: '<img src="styles/legend/Location_5.png" /> Location'
            });
var format_PHC_6 = new ol.format.GeoJSON();
var features_PHC_6 = format_PHC_6.readFeatures(json_PHC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PHC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PHC_6.addFeatures(features_PHC_6);
var lyr_PHC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PHC_6, 
                style: style_PHC_6,
                popuplayertitle: "PHC",
                interactive: false,
                title: '<img src="styles/legend/PHC_6.png" /> PHC'
            });
var format_Road1_7 = new ol.format.GeoJSON();
var features_Road1_7 = format_Road1_7.readFeatures(json_Road1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Road1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road1_7.addFeatures(features_Road1_7);
var lyr_Road1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road1_7, 
                style: style_Road1_7,
                popuplayertitle: "Road1",
                interactive: false,
                title: '<img src="styles/legend/Road1_7.png" /> Road1'
            });
var format_School_8 = new ol.format.GeoJSON();
var features_School_8 = format_School_8.readFeatures(json_School_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_School_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_8.addFeatures(features_School_8);
var lyr_School_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_8, 
                style: style_School_8,
                popuplayertitle: "School",
                interactive: false,
                title: '<img src="styles/legend/School_8.png" /> School'
            });
var format_Toddy_9 = new ol.format.GeoJSON();
var features_Toddy_9 = format_Toddy_9.readFeatures(json_Toddy_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Toddy_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toddy_9.addFeatures(features_Toddy_9);
var lyr_Toddy_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toddy_9, 
                style: style_Toddy_9,
                popuplayertitle: "Toddy",
                interactive: false,
                title: '<img src="styles/legend/Toddy_9.png" /> Toddy'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BOUNDARY_1.setVisible(true);lyr_Anganawadi1_2.setVisible(true);lyr_CommunityHall1_3.setVisible(true);lyr_Dustbin1_4.setVisible(true);lyr_Location_5.setVisible(true);lyr_PHC_6.setVisible(true);lyr_Road1_7.setVisible(true);lyr_School_8.setVisible(true);lyr_Toddy_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BOUNDARY_1,lyr_Anganawadi1_2,lyr_CommunityHall1_3,lyr_Dustbin1_4,lyr_Location_5,lyr_PHC_6,lyr_Road1_7,lyr_School_8,lyr_Toddy_9];
lyr_BOUNDARY_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_Anganawadi1_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', 'Name1': 'Name1', });
lyr_CommunityHall1_3.set('fieldAliases', {'Name': 'Name', });
lyr_Dustbin1_4.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', });
lyr_Location_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', });
lyr_PHC_6.set('fieldAliases', {'Name': 'Name', });
lyr_Road1_7.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_School_8.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', 'ANU': 'ANU', });
lyr_Toddy_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', });
lyr_BOUNDARY_1.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Anganawadi1_2.set('fieldImages', {'id': '', 'Name': '', 'Location': '', 'Name1': '', });
lyr_CommunityHall1_3.set('fieldImages', {'Name': '', });
lyr_Dustbin1_4.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', });
lyr_Location_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'WARD_NO': 'TextEdit', 'WARD_NAME': 'TextEdit', });
lyr_PHC_6.set('fieldImages', {'Name': '', });
lyr_Road1_7.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_School_8.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', 'ANU': '', });
lyr_Toddy_9.set('fieldImages', {'id': '', 'Name': '', 'Location': '', });
lyr_BOUNDARY_1.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_Anganawadi1_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', 'Name1': 'no label', });
lyr_CommunityHall1_3.set('fieldLabels', {'Name': 'no label', });
lyr_Dustbin1_4.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', });
lyr_Location_5.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'inline label - always visible', 'WARD_NO': 'no label', 'WARD_NAME': 'no label', });
lyr_PHC_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Road1_7.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_School_8.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', 'ANU': 'no label', });
lyr_Toddy_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', });
lyr_Toddy_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});