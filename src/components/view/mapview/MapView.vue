<template>
	<div class='mapAll'>
		<div class='mapHeader'>
			<Header :isShow='isShow'></Header>
		</div>
		<button @click="doSomething">回到原点</button>
		<button @click="init" class="b1">初始化</button>
		<div id="map" ref="rootmap"></div>
	</div>
</template>

<script>
	import "ol/ol.css";
	import { Map, View } from "ol";
	import TileLayer from "ol/layer/Tile";
	//	import XYZ from "ol/source/XYZ";
	import OSM from "ol/source/OSM";
	import OLCesium from 'olcs/OLCesium.js';

	// import Header from '../Header'
	import Header from '../header/Header'
	export default {
		data() {
			return {
				map: null,
				isShow: true,
				center: [118.77667, 34.13567] //中心点坐标
			};
		},

		components: {
			Header
		},
		mounted() {

			var mapcontainer = this.$refs.rootmap;

			this.map = new Map({
				target: mapcontainer,
				layers: [
					//					 new TileLayer({
					//					 	source: new XYZ({
					//					 		url: 'http://192.168.1.129//{z}/{x}/{y}.png' //本例中地图瓦片保存在当前目录下的tile文件夹目录下
					//					 	})
					//					 })
					new TileLayer({
						source: new OSM()
					})
				],
				view: new View({
					projection: "EPSG:4326", //使用这个坐标系
					center: [118.77667, 34.13567], //沭阳
					zoom: 15,
					minZoom: 12,
					maxZoom: 18
				})
			});
			const ol3d = new OLCesium({
				map:this.map
			});
			ol3d.setEnabled(true);
			ol3d.camera_.setTilt(0.8); //倾斜角度

		},
		methods: {
			doSomething: function() {
				this.map.getView().animate({
					center: this.center
				});
			},
			init: function() {
				//3D倾斜效果
				let ol3d = new olcs.OLCesium({
					map: this.map
				});
				console.log(ol3d);
				ol3d.getCesiumScene();
				ol3d.setEnabled(true);
				ol3d.camera_.setTilt(0.8); //倾斜角度
			}
		}
	}
</script>

<style>
	#map {
		height: 100%;
	}
	/*隐藏ol的一些自带元素*/
	
	.ol-attribution,
	.ol-zoom {
		display: none;
	}
	
	.mapAll {
		position: relative;
	}
	
	.mapHeader {
		position: absolute;
		width: 100%;
		z-index: 1;
		height: 11% !important;
	}
	
	button {
		color: black;
		position: absolute;
		top: 100px;
		right: 50px;
		z-index: 2;
		background: #fdb;
	}
	.b1{
		color: black;
		position: absolute;
		top: 200px;
		right: 50px;
		z-index: 2;
		background: #fba;
	}
</style>