<template>
	<div id="contextmenu">
		<ul>
			<li @click="confirm">{{ label }}の削除</li>
			<li @click="$emit('hide')">閉じる</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'ContextMenu',
		props: {
			label:{
				type: String,
				default: 'タスク',
				required: true,
			},
			targetName: {
				type: String,
				default: '',
				required: true,
			},
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
				if(confirm(`${this.label}名「${this.targetName}」を完全に削除します。よろしいですか？`)){
					this.$emit('delete');	
				}else{
					this.$emit('hide');
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	#contextmenu{
		position: fixed;
		top: 0;
		left: 0;
		width: 200px;
		border: 1px solid $gray;
		background: $white_2;
    ul{
      padding: 0;
      li{
        cursor: pointer;
        list-style: none;
        padding: 5px 10px;
        text-align: center;
        &:hover{
          background: $grn;
        }
        & + li{
            border-top: 1px solid $gray;
        }			
      }		
    }		
	}
</style>