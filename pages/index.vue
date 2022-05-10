<template>
	<layout-wrapper>
    <div class="task-area">
      <dl class="flex-base al-center between">
        <dt class="wid40">タイトル</dt>
				<dt class="wid8">状態</dt>
				<dt class="wid10">登録日</dt>
				<dt class="wid10">期限</dt>
				<dt class="wid8">優先度</dt>
      </dl>
			<dl v-for="t in taskList">
        <dd>
					<div class="task">
						
					</div>
				</dd>
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