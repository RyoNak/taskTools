<template>
	<footer>
		<div class="copy">&copy;2022 RyoNak All reserved</div>
	</footer>
</template>
 
<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		color: $white_2;
		background: $main;
	}
	.copy{
		width: 100%;
		height: 30px;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;		
	}
</style>