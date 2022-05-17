<template>
	<div id="contextmenu">
		<ul>
			<li @click="confirm">タスクの削除</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'ContextMenu',
		props: {
			position: {
				type: Object,
				default: ()=>{return {top: 0,left: 0}},
				required: true,
			},
		},
		watch:{
			position:{
				handler(newVal,oldVal){
					this.$nextTick(()=>{
          	document.getElementById('contextmenu').style.top = newVal.top + "px";
          	document.getElementById('contextmenu').style.left = newVal.left + "px";					
					});
				},
				deep: true,
				immediate: true,
			},
		},
		methods:{
			confirm(){
				if(confirm('このタスクを完全に削除します。よろしいですか？')){
					this.$emit('delete');	
				}
			},
		},
	}
</script>

<style scoped>
	#contextmenu{
		position: fixed;
		top: 0;
		left: 0;
		width: 200px;
		border: 1px solid #ccc;
		background: #fff;
	}
	#contextmenu ul li{
		cursor: pointer;
		list-style: none;
	}
</style>