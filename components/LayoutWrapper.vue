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
		padding-top: 90px;
	}
</style>