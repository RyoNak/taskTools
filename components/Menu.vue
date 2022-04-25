<template>
	<nav>
		<ul>
			<li>ホーム</li>
			<li>タスク追加</li>
			<li>アプリ概要</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name: "Menu"
	}
</script>

<style scoped>
	nav{
		height: 100%;
	}
	ul{
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		align-content: center;
	}
	li{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		min-width: 160px;
		list-style: none;
		text-align: center;
		border: 2px solid transparent;
		cursor: pointer;
		transition: all .3s ease;
	}
	li:hover{
		background: #fff;
		border-color: #333;
		color: #333;
	}
</style>