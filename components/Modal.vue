<template>
	<div class="modal-back" @click="judgeToggleModal">
		<div class="modal">
      <task action="update" :parentTask="task"/>
		</div>
	</div>
</template>

<script>
export default{
	name: 'Modal',
	props: {
		task:{
      type: Object,
      default: ()=>({}),
      required: true,
		},
	},
	methods:{
		judgeToggleModal(e){
			if(e.target.closest('.modal') === null){
				this.$emit('toggle');	
			}
		},
	}
}
</script>

<style scoped>
	.modal-back{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.8);
		user-select: none;
		z-index: 1000;
	}
	.modal{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background: #fff;
		height: 50%;
		padding: 30px;
		overflow-y: scroll;
	}
</style>