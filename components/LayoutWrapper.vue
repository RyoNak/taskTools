<template>
	<div class="wrapper">
		<slot />
	</div>
</template>

<script>
	export default{
		name: 'LayoutWrapper',
	}
</script>

<style scoped>
	.wrapper{
    max-width: 1000px;
		padding: 50px 0;
    margin: 90px auto 0;
	}
	@media screen and (max-width: 1024px){
		.wrapper{
			max-width: 95%;
		}
	}
</style>