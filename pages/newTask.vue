<template>
	<layout-wrapper>	
    <h2 class="style_green"><i class="fa-solid fa-flag mr"></i>新規タスク追加</h2>
    <div class="task-box">
      <dl>
        <dd>
					<div class="input-effect">
            <input type="text" class="input_1" v-model="task.title" @blur="hasContent">
            <label>タイトルを入力</label>
						<span class="focus-border"></span>
					</div>
				</dd>
      </dl>
      <dl>
        <dt>期限/日程</dt>
        <dd>
					<div class="input-effect">
            <label class="label_style_1">
              <input type="date" v-model="task.deadline">
							<div class="icon_input calender"></div>
            </label>
					</div>
				</dd>
      </dl>
			<dl>
				<dt>開始時刻</dt>
				<dd>
					<div class="input-effect">
						<label class="label_style_1">
							<input type="time" v-model="task.st_time">
							<div class="icon_input clock"></div>
						</label>
					</div>	
				</dd>
			</dl>
			<dl>
				<dt>終了時刻</dt>
				<dd>
					<div class="input-effect">
						<label class="label_style_1">
							<input type="time" v-model="task.fin_time">
							<div class="icon_input clock"></div>
						</label>
					</div>						
				</dd>
			</dl>
      <dl>
        <dt>優先度（1から99まで）</dt>
				<dd>
					<div class="drag-parent" id="drag-1" @click="onClick">
						<div class="drag-child" id="drag-2" :class="{'active': is_drag}" @dragstart="onDrugStart" @drag="onDrug" @dragend="onDrugEnd" draggable></div>
					</div>
					<span>{{ task.priority }}</span>
				</dd>
      </dl>
      <dl>
        <dt>メモ</dt>
        <dd><textarea class="textarea_1" v-model="task.memo"></textarea></dd>
      </dl>
      <dl>
        <dt>進捗状況</dt>
        <dd>
          <label class="btn btn_1" :class="{'active': task.done === 'yet'}"><input type="radio" v-model="task.done" value="yet">未着手</label>
          <label class="btn btn_1" :class="{'active': task.done === 'doing'}"><input type="radio" v-model="task.done" value="doing">処理中</label>
          <label class="btn btn_1" :class="{'active': task.done === 'hold'}"><input type="radio" v-model="task.done" value="hold">保留</label>
          <label class="btn btn_1" :class="{'active': task.done === 'comp'}"><input type="radio" v-model="task.done" value="comp">完了</label>
        </dd>
      </dl>
      <button type="button" class="btn btn_2" @click="addTask">追加</button>
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
				is_drag: false,
      }
    },
		created(){
			this.setDate();
			this.setTime();
		},
		mounted(){
			this.init();
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
			init(){
				const childWidth = document.getElementById('drag-2').offsetWidth;
				this.task.priority = this.diffPriority(childWidth);
			},
      formatDate(date) {
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
      },	
			hasContent(e){
				if(e.target.value !== ''){
					e.target.classList.add('has-content');
				}else{
					e.target.classList.remove('has-content');
				}
			},
			onDrugStart(e){
				this.is_drag = true;
				e.dataTransfer.setDragImage(new Image(),0,0);
			},
			onDrug(e){
				e.target.style.width = e.offsetX + 'px';
			},
			onDrugEnd(e){
				this.is_drag = false;
				const childWidth = e.target.offsetWidth;
				this.task.priority = this.diffPriority(childWidth);
			},
			onClick(e){
				const childWidth = e.offsetX;
				this.task.priority = this.diffPriority(childWidth);	
				document.getElementById('drag-2').style.width = e.offsetX+'px';
			},
			// 「優先度」を計算する
			diffPriority(childVal){
				const parentWidth = document.getElementById('drag-1').offsetWidth;
				let diff = Math.round(childVal / parentWidth * 100);
				if(diff > 100){
					diff = 100;
				}
				return diff;
			},
    }
  }
</script>

<style scoped>
	h2{
		margin-bottom: 2rem;
	}
	.task-box{
		width: 100%;
		max-width: 500px;
	}
</style>
