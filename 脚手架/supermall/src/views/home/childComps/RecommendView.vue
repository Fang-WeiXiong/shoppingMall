<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in crecommends.list" :key="item.id">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div class="recommend-title">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name: "RecommendView",
		props: {
			crecommends:{
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		width: 100%;
		text-align: center;
		padding: 15px 0 15px;
		border-bottom: 10px solid #eee;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		width: 70px;
		height: 65px;
		border-radius: 100%;
	}
	.recommend-title{
		font-size: 13px;
		padding: 1px 0;
	}
</style>
