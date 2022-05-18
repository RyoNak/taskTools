<template>
	<layout-wrapper>
		<div class="sort-area"> 
			<select class="flex-base mla mb" v-model="sortKinds">
				<option value="deadline_asc">期限が近い順</option>
				<option value="deadline_desc">期限が遠い順</option>
				<option value="regdate_asc">登録日が新しい順</option>
				<option value="regdate_desc">登録日が古い順</option>
				<option value="priority_desc">優先度順（降順）</option>
				<option value="priority_asc">優先度順（昇順）</option>
			</select>
		</div>
    <div class="task-area">
      <dl class="flex-base al-center between table-head">
        <dt class="wid45">タイトル</dt>
				<dt class="wid10 center">状態</dt>
				<dt class="wid10 center">登録日</dt>
				<dt class="wid10 center">期限</dt>
				<dt class="wid10 center">優先度</dt>
      </dl>
			<dl v-for="t in taskList" class="flex-base al-center between pop" @click.left="updateTask(t)" @click.right.prevent="showContext($event,t)">
        <dd class="wid45 flex-base al-center"><span class="flex-base al-center icon mr" v-html="t.category_icon"></span>{{ t.title }}</dd>
				<dd class="wid10 center"><span class="span_style_1" :class="t.done">{{ t.done_label }}</span></dd>
				<dd class="wid10 center">{{ t.reg_date }}</dd>
				<dd class="wid10 center">{{ t.deadline }}</dd>
				<dd class="wid10 center">{{ t.priority }}</dd>
      </dl>
    </div>
		<modal v-if="is_modal" :task="selectTask" @toggle="toggleModal"></modal>
		<context-menu v-if="is_context" label="タスク" :targetName="targetName" :position="context_position" @delete="deleteTask" @hide="is_context = false"/>
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
			targetName: '',
			sortKinds: '',
    }
  },
  computed: {
    dbValueList(){
      return this.$store.getters['todo/getList'];
    },
		taskList(){
			const db_array = Array.from(this.dbValueList);
			let task_array = db_array.map(v=>{
				// ステータスの設定
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
				// カテゴリーアイコンの設定
				v['category_icon'] = '';
        this.categories.map(w=>{
          if(v.category === w.name){
            v['category_icon'] = w.icon;
          }
        });
			
				return v;
			});		
			
			let sorted = task_array.sort((a,b)=>{	
				const a_deadline = new Date(a.deadline).getTime();
				const b_deadline = new Date(b.deadline).getTime();
				const a_regdate = new Date(a.reg_date).getTime();
				const b_regdate = new Date(b.reg_date).getTime();
				
				switch(this.sortKinds){
					case 'deadline_asc':												
						return a_deadline - b_deadline;
						break;
					case 'deadline_desc':
						return b_deadline - a_deadline;
						break;
					case 'regdate_asc':
						return a_regdate - b_regdate;
						break;
					case 'regdate_desc':
						return b_regdate - a_regdate;
						break;
					case 'priority_asc':
						return a.priority - b.priority;
						break;
					case 'priority_desc':
						return b.priority - a.priority;
						break;
				}
			});
			
			if(sorted){
				return sorted;
			}
			
			return task_array;
		},
		categories(){
			return this.$store.getters['category/getCategories'];
		},
  },
	created(){
		this.setTask();
		this.setStore();
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
		async setStore(){
			await this.$store.dispatch('category/setCategory');
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
			this.targetName = JSON.parse(JSON.stringify(obj)).title;
			this.context_position = {top: e.pageY, left: e.pageX};
			this.is_context = true;
		},
	},
}
</script>

<style>

</style>