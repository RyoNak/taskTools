<template>
	<div class="category-box">
    <div class="input-effect">
      <input type="text" class="input_1" :class="{'has-content': category.name}" v-model="category.name">
      <label>カテゴリ名を入力</label>
      <span class="focus-border"></span>
    </div>    
		<div class="input-effect">
      <input type="text" class="input_1" :class="{'has-content': category.icon}" v-model="category.icon">
      <label>アイコン（Font Awesomeのiタグを貼り付け）</label>
      <span class="focus-border"></span>
    </div>
		<button type="button" class="btn btn_3" @click="addCategory">追加</button>		
	</div>
</template>

<script>
	export default{
		name: 'Category',
		data(){
			return {
				category:{
					name: '',	
					icon: '',
				},
			}
		},
		methods: {
			async addCategory(){
				if(this.category.name){
          await this.$store.dispatch('category/addCategory',this.category);			
					this.$emit('reload');
					this.category = {};
				}
			},
		},
	}
</script>

<style>
	.category-box{
		width: 100%;
		max-width: 580px;
		padding: 2rem 0;
	}
	.input-effect + .input-effect{
		margin-top: 60px;
	}
</style>