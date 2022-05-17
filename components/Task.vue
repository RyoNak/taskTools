<template>	
  <div class="task-box">
    <validation-observer ref="obs" v-slot="ObserverProps">
      <dl>
        <dd>
          <ValidationProvider name="タイトル" rules="required">
            <div slot-scope="ProviderProps">
              <div class="input-effect">
                <input type="text" class="input_1" :class="{'has-content': task.title}" v-model="task.title">
                <label>タイトルを入力</label>
                <span class="focus-border"></span>
              </div>
              <p class="validate-error">{{ ProviderProps.errors[0] }}</p>
            </div>
          </ValidationProvider>
        </dd>
      </dl>
      <dl>
        <dt><i class="fa-solid fa-clone mr"></i>期限/日程</dt>
        <dd>
          <div class="input-effect">
            <label class="label_style_1">
              <input type="date" v-model="task.deadline">
              <div class="icon_input calender"></div>
            </label>
          </div>
        </dd>
      </dl>
      <div class="flex-base al-end between">
        <dl>
          <dt><i class="fa-solid fa-clone mr"></i>開始時刻</dt>
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
          <dt><i class="fa-solid fa-clone mr"></i>終了時刻</dt>
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
          <label class="btn btn_1" :class="{'active': timeFlg}"><input type="checkbox" @click="timeFlg = !timeFlg">時刻設定なし</label>
        </dl>
      </div>
      <dl>
        <dt><i class="fa-solid fa-clone mr"></i>優先度（1から99まで）</dt>
        <dd>
          <div class="drag-parent" id="drag-1" @click="onClick">
            <div class="drag-child" id="drag-2" :class="{'active': is_drag}" @dragstart="onDrugStart" @drag="onDrug" @dragend="onDrugEnd" draggable></div>
          </div>
          <span>{{ task.priority }}</span>
        </dd>
      </dl>
      <dl>
        <dt><i class="fa-solid fa-clone mr"></i>メモ</dt>
        <dd><textarea class="textarea_1" v-model="task.memo"></textarea></dd>
      </dl>
      <dl>
        <dt><i class="fa-solid fa-clone mr"></i>進捗状況</dt>
        <dd>
          <label class="btn btn_1" :class="{'active': task.done === 'yet'}"><input type="radio" v-model="task.done" value="yet">未着手</label>
          <label class="btn btn_1" :class="{'active': task.done === 'doing'}"><input type="radio" v-model="task.done" value="doing">処理中</label>
          <label class="btn btn_1" :class="{'active': task.done === 'hold'}"><input type="radio" v-model="task.done" value="hold">保留</label>
          <label class="btn btn_1" :class="{'active': task.done === 'comp'}"><input type="radio" v-model="task.done" value="comp">完了</label>
        </dd>
      </dl>
      <p class="mini-msg" v-if="judgeValid(ObserverProps.invalid,ObserverProps.validated)">※未入力の項目があります。</p>
      <button type="button" class="btn btn_2" @click="addTask" :disabled="judgeValid(ObserverProps.invalid,ObserverProps.validated)">{{comp_btn_label}}</button>
    </validation-observer>
  </div>
</template>

<script>
  export default{
		name: 'Task',
		props: {
			action: {
				type: String,
				default: 'insert',
			},
			parentTask: {
				type: Object,
				default: ()=>{ return {}},
			},
		},
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
          done: 'yet'
        },
				is_drag: false,
				timeFlg: false,
				comp_btn_label: '追加',
      }
    },
		watch:{
			timeFlg(){
				console.log(this.timeFlg);
				if(this.timeFlg){
					this.task.st_time = '';
					this.task.fin_time = '';
				}
			},
		},
		created(){
			this.setDate();
			this.setTime();
			if(Object.keys(this.parentTask).length !== 0){
				this.task = this.parentTask;
				this.comp_btn_label = '保存';
			}
		},
		mounted(){
			this.init();	
		},
    methods:{
      async addTask(){
				switch(this.action){
					case 'insert':
            await this.$store.dispatch('todo/addTask',this.task);
            this.$router.push('/');						
						break;
					case 'update':
            await this.$store.dispatch('todo/updateTask',this.task);
            this.$router.go('/list');												
						break;
				}
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
				if(this.action !== 'update'){
					// 新規追加時は優先度の初期値を設定する
					const childWidth = document.getElementById('drag-2').offsetWidth;
					this.task.priority = this.diffPriority(childWidth);
				}else{
					// 変更時は登録済みの優先度からゲージの横幅を設定する
					const parentWidth = document.getElementById('drag-1').offsetWidth;
					document.getElementById('drag-2').style.width = Math.round(parentWidth * (this.task.priority / 100)) + 'px';
				}
			},
      formatDate(date) {
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
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
			// 要素の幅から「優先度」を計算する
			diffPriority(childVal){
				const parentWidth = document.getElementById('drag-1').offsetWidth;
				let diff = Math.round(childVal / parentWidth * 100);
				if(diff > 100){
					diff = 100;
				}
				return diff;
			},
			judgeValid(is_invalid,is_validated){
				switch(this.action){
					case 'insert':
            if(is_invalid || !is_validated){
              return true;
            }else{
              return false;
            }								
						break;
					case 'update':
            if(is_invalid){
              return true;
            }else{
              return false;
            }						
						break;
				}
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
		max-width: 580px;
	}
</style>
