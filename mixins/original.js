export default{
	data(){
		return {
			is_modal: false,
			is_context: false,
			context_position: {},
			targetId: '',
			targetName: '',
		}
	},
	computed: {
		taskList() {
			return JSON.parse(JSON.stringify(this.$store.state.todo.list));
		},
		categories(){
			return this.$store.state.category.categories;
		},			
	},
	created(){
		this.setTask();
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