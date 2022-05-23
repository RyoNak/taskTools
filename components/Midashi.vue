<template>
	<h2 class="midashi"><i class="fa-solid fa-crown mr"></i><slot/></h2>
</template>

<script>
 export default{
	 name: 'Midashi',
 }
</script>

<style scoped>
	h2{
		padding: 1rem;
		margin-bottom: 2rem;
		position: relative;
	}
</style>