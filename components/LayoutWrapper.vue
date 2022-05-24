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

<style lang="scss" scoped>
	.wrapper{
    max-width: 1000px;
		padding: 50px 0;
    margin: 90px auto 0;
    @include tablet{
      max-width: 95%;
			padding-bottom: 150px;
    }		
		@include mobile{
			padding-bottom: 120px;
		}
	}
</style>