<template>
	<header>
		<granim/>
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

<style lang="scss" scoped>
	header{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 90px;
		background: $main;
		color: $white;
		display: flex;
		flex-wrap: wrap;
		align-items: center;		
		justify-content: space-between;
		z-index: 500;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}
	h2{
		width: 	250px;
		letter-spacing: 2px;
		text-align: center;
		padding: .8em .8em .5em .8em;
	}
</style>