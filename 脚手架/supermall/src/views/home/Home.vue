<template>
	<div id="home">
		<nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
		<home-swiper :cbanners="banners" />
		<recommend-view :crecommends="recommends"/>
		<feature-view/>
		<tab-control :titles="['流行', '新款', '精选']"/>
		
	</div>
</template>

<script>
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import TabControl from '../../components/content/tabControl/TabControl.vue'
	
	import {getHomeMultidata} from '../../network/home.js'
	
	export default {
		name: "Home",
		components: {
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabControl
		},
		data() {
			return{
				banners: [],
				recommends: []
			}
		},
		created() {
			getHomeMultidata().then(res => {
				console.log(res);
				this.banners = res.data.data.banner;
				this.recommends = res.data.data.recommend
			})
		}
	}
</script>

<style>
	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
	}
</style>
