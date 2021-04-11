<template>
	<tab-bar>
		<tab-bar-item path="/home">
			<img src="../../../assets/img/tabbar/home.svg" alt="" slot="item-icon">
			<img src="../../../assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
			<div slot="item-text">首页</div>

		</tab-bar-item>
		<tab-bar-item path="/sort">
			<img src="../../../assets/img/tabbar/sort.svg" alt="" slot="item-icon">
			<img src="../../../assets/img/tabbar/sort_active.svg" alt="" slot="item-icon-active">
			<div slot="item-text">分类</div>
			<div>
				<h2>aaaa</h2>
			</div>
		</tab-bar-item>
		<tab-bar-item path="/shopping">
			<img src="../../../assets/img/tabbar/shopping.svg" alt="" slot="item-icon">
			<img src="../../../assets/img/tabbar/shopping_active.svg" alt="" slot="item-icon-active">
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/proflie">
			<img src="../../../assets/img/tabbar/proflie.svg" alt="" slot="item-icon">
			<img src="../../../assets/img/tabbar/proflie_active.svg" alt="" slot="item-icon-active">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from '../../common/tabbar/TabBar.vue'
	import TabBarItem from '../../common/tabbar/TabBarItem.vue'

	export default {
		name: "MainTabBar",
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
