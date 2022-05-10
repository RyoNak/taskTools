<template>
	<layout-wrapper>
    <div class="task-area">
      <dl class="flex-base al-center between">
        <dt class="wid40">タイトル</dt>
				<dt class="wid15">状態</dt>
				<dt class="wid15">登録日</dt>
				<dt class="wid15">期限</dt>
				<dt class="wid10">優先度</dt>
      </dl>
			<dl v-for="t in taskList" class="flex-base al-center between">
        <dd class="wid40">{{ t.title }}</dd>
				<dd class="wid15">{{ t.done }}</dd>
				<dd class="wid15">{{ t.reg_date }}</dd>
				<dd class="wid15">{{ t.deadline }}</dd>
				<dd class="wid10">{{ t.priority }}</dd>
      </dl>
    </div>
	</layout-wrapper>
</template>

<script>

export default{
  data(){
    return {

    }
  },
  computed: {
    taskList(){
      return this.$store.getters['todo/getList'];
    },
  },
	created(){
		this.setTask();
	},
	methods:{
		async setTask(){
			await this.$store.dispatch('todo/setTask');
		},
	},
}
</script>

<style>

</style>