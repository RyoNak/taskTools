export default{
	data(){
		return {
			is_modal: false,
			is_context: false,
			context_position: {},
			targetId: '',
			targetName: '',
			windowWidth: 0,
		}
	},
	computed: {
		taskList() {
			return JSON.parse(JSON.stringify(this.$store.state.todo.list));
		},
		categories(){
			return this.$store.state.category.categories;
		},	
		is_mobile(){
			if(this.windowWidth <= 1024){
				return true;
			}else{
				return false;
			}
		},
	},
	mounted(){
		this.initSetting();
	},	
	methods: {
		initSetting(){
			const self = this;	
			/*コンテキストメニューの設定*/
			document.body.addEventListener('click',function(e){
				if(e.target.closest('#contextmenu') === null){
					self.is_context = false;
					self.targetId = '';
				}
			});
			/*画面幅の取得*/
			window.addEventListener('resize',function(e){
				self.windowWidth = e.target.innerWidth;
			});
			self.windowWidth = window.innerWidth;
		},		
		async setTask() {
			await this.$store.dispatch('todo/setTask');
		},	
		async setStore(){
			await this.$store.dispatch('category/setCategory');
		},		
		toggleModal(){
			this.is_modal = !this.is_modal;
		},
	},
}