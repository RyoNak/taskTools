<template>
	<layout-wrapper>	
    <h2 class="style_green"><i class="fa-solid fa-folder mr"></i>カテゴリ追加</h2>
		<category @reload="setStore"/>
    <div class="category-list">
      <ul>
        <li v-for="c in categories" class="flex-base al-center mb" @click.left="" @click.right.prevent="showContext($event,c)">
					<span class="flex-base al-center icon mr" :class="c.icon" v-html="c.icon"></span>{{ c.name }}
				</li>
      </ul>
    </div>		
		<context-menu v-if="is_context" label="カテゴリ" :targetName="targetName" :position="context_position" @delete="deleteCategory" @hide="is_context = false"/>
	</layout-wrapper>
</template>

<script>
	export default{
		data(){
			return {
				is_context: false,
				targetId: '',
				targetName: '',
				context_position: {},
			}
		},
		computed: {
			categories(){
				return this.$store.getters['category/getCategories'];
			},
		},
		created(){
			this.setStore();
		},
		mounted(){
			this.initSetting();
		},
		methods: {
      initSetting(){
        const self = this;	

        document.body.addEventListener('click',function(e){ 
          if(e.target.closest('#contextmenu') === null){
            self.is_context = false;
            self.targetId = '';
          }
        });
      },			
			async setStore(){
				await this.$store.dispatch('category/setCategory');
			},		
			async deleteCategory(){
				await this.$store.dispatch('category/deleteCategory',this.targetId);
				this.targetId = '';
				this.is_context = false;
				this.setStore();
			},			
      showContext(e,obj){
        this.targetId = JSON.parse(JSON.stringify(obj)).id;
        this.targetName = JSON.parse(JSON.stringify(obj)).name;
        this.context_position = {top: e.pageY, left: e.pageX};
        this.is_context = true;
      },	
		},
	}
</script>

<style>
	.category-list ul{
		padding: 0;
	}
	.category-list ul li{
		list-style: none;
	}
</style>