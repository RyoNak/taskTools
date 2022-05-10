<template>
	<layout-wrapper>	
    <h2 class="style_green"><i class="fa-solid fa-flag mr"></i>新規タスク追加</h2>
    <div class="task-box">
      <dl>
        <dd>
           <div class="input_box" :class="{'active': isBorder}">
              <div class="input_inner">
                 <input id="style_1" type="text" @focus="isBorder = true" @blur="isBorder = false"　v-model="task.title">
                 <div class="input_string"><span v-if="!task.title">タイトルを入力</span></div>
              </div>
           </div>					
				</dd>
      </dl>
      <dl>
        <dt>期限/日程</dt>
        <dd><label class="label_style_1"><input type="date" v-model="task.deadline"></label></dd>
      </dl>
			<dl>
				<dt>開始時刻</dt>
				<dd><input type="time" v-model="task.st_time"></dd>
			</dl>
			<dl>
				<dt>終了時刻</dt>
				<dd><input type="time" v-model="task.fin_time"></dd>
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
          <label><input type="radio" v-model="task.done" value="yet">未着手</label>
          <label><input type="radio" v-model="task.done" value="doing">処理中</label>
          <label><input type="radio" v-model="task.done" value="hold">保留</label>
          <label><input type="radio" v-model="task.done" value="comp">完了</label>
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
					deadline: '',
					st_time: '',
					fin_time: '',
          priority: 0,
          memo: '',
          done: ''
        },
				isBorder: false,
      }
    },
		created(){
			this.setDate();
			this.setTime();
		},
    methods:{
      async addTask(){
        await this.$store.dispatch('todo/addTask',this.task);
				this.$router.push('/');
      },
			setDate(){
				const date = new Date();
				const nowDate = this.formatDate(date);
				this.task.date = nowDate;
			},
			setTime(){
				const date = new Date();
				const nowTime = date.getHours() + ':' + date.getMinutes();
				this.task.st_time = nowTime;
			},
      formatDate(date) {
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
      },	
    }
  }
</script>

<style scoped>
	h2{
		margin-bottom: 2rem;
	}
</style>
