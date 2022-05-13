<template>
	<header>
		<div>
			<h2><nuxt-link to="/">Task Manager</nuxt-link></h2>
		</div>
		<Menu/>
	</header>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	header{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 90px;
		background: #0E181B;
		color: #F7EDF0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;		
		justify-content: space-between;
		z-index: 500;
	}
	h2{
		width: 	250px;
		letter-spacing: 2px;
		text-align: center;
		padding: .8em .8em .5em .8em;
	}
</style>