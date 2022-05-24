<template>
	<h2 class="midashi"><slot/></h2>
</template>

<script>
 export default{
	 name: 'Midashi',
 }
</script>

<style lang="scss" scoped>
	h2{
		padding: 1rem;
		margin-bottom: 2rem;
		position: relative;
	}
</style>