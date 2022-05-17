<template>
	<layout-wrapper>
    <div class="task-area">
      <dl class="flex-base al-center between table-head">
        <dt class="wid40">タイトル</dt>
				<dt class="wid10 center">状態</dt>
				<dt class="wid15 center">登録日</dt>
				<dt class="wid15 center">期限</dt>
				<dt class="wid10 center">優先度</dt>
      </dl>
			<dl v-for="t in taskList" class="flex-base al-center between pop" @click.left="updateTask(t)" @click.right.prevent="showContext($event,t)">
        <dd class="wid40">{{ t.title }}</dd>
				<dd class="wid10 center"><span class="span_style_1" :class="t.done">{{ t.done_label }}</span></dd>
				<dd class="wid15 center">{{ t.reg_date }}</dd>
				<dd class="wid15 center">{{ t.deadline }}</dd>
				<dd class="wid10 center">{{ t.priority }}</dd>
      </dl>
    </div>
		<modal v-if="is_modal" :task="selectTask" @toggle="toggleModal"></modal>
		<context-menu v-if="is_context" :position="context_position" @delete="deleteTask"></context-menu>
	</layout-wrapper>
</template>

<script>

export default{
  data(){
    return {
			is_modal: false,
			is_context: false,
			selectTask: {},
			context_position: {},
			targetId: '',
    }
  },
  computed: {
    dbValueList(){
      return this.$store.getters['todo/getList'];
    },
		taskList(){
			const db_array = Array.from(this.dbValueList);
			let task_array = db_array.map(v=>{
				switch(v.done){
					case 'yet':
						v['done_label'] = '未着手';
						break;
					case 'doing':
						v['done_label'] = '処理中';
						break;
					case 'hold':
						v['done_label'] = '保留';
						break;
					case 'comp':
						v['done_label'] = '完了';
						break;
					default:
						v['done_label'] = '-';
						break;
				}
				return v;
			});

			return task_array;
		},
  },
	created(){
		this.setTask();
	},
	mounted(){
		this.initSetting();
	},
	methods:{
		initSetting(){
			const self = this;	

			document.body.addEventListener('click',function(e){
				if(e.target.closest('#contextmenu') === null){
					self.is_context = false;
					self.targetId = '';
				}
			});
		},
		async setTask(){
			await this.$store.dispatch('todo/setTask');
		},
		updateTask(obj){
			this.is_modal = true;
			this.selectTask = JSON.parse(JSON.stringify(obj));
		},
		async deleteTask(){
			await this.$store.dispatch('todo/deleteTask',this.targetId);
			this.$router.go('/list');
		},
		toggleModal(){
			this.is_modal = !this.is_modal;
		},
		showContext(e,obj){
			this.targetId = JSON.parse(JSON.stringify(obj)).id;
			this.context_position = {top: e.pageY, left: e.pageX};
			this.is_context = true;
		},
	},
}
</script>

<style>

</style>