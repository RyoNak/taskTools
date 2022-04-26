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
    max-width: 1200px;
		padding: 50px 0;
    margin: 90px auto 0;
	}
</style>