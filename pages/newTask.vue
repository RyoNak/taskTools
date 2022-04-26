<template>
	<layout-wrapper>	
    <h2>新規タスク追加</h2>
    <div class="task-box">
      <dl>
        <dt>タイトル</dt>
        <dd><input type="text" v-model="task.title"></dd>
      </dl>
      <dl>
        <dt>日程</dt>
        <dd><input type="date" v-model="task.date"></dd>
      </dl>
      <dl>
        <dt>優先度</dt>
        <dd><input type="number" v-model="task.priority"></dd>
      </dl>
      <dl>
        <dt>メモ</dt>
        <dd><textarea v-model="task.memo"></textarea></dd>
      </dl>
      <dl>
        <dt>進捗状況</dt>
        <dd>
          <label><input type="checkbox" v-model="task.done">完了</label>
        </dd>
      </dl>
      <button type="button" @click="addTask">追加</button>
    </div>
	</layout-wrapper>
</template>

<script>
  export default{
    data(){
      return {
        task: {
          title: '',
          date: '',
          priority: 0,
          memo: '',
          done: false
        }
      }
    },
    methods:{
      async addTask(){
        await this.$store.dispatch('todo/addTask',this.task);
      },
    }
  }
</script>

