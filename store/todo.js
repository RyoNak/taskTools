export const state = () => ({
    list: [],
});
export const actions = {
  addTask(vuexContext, task){
    vuexContext.commit('add',task);
  },
	async setTask(vuexContext){
		let task = [];
		//タスクを空にする
		vuexContext.commit('remove');
		//同期的にfirebaseからデータを取得
		await new Promise((resolve,reject)=>{
			this.$fire.database.ref('task').on("value",(obj)=>{
          if(obj){
            const rootList = obj.val();
            if(rootList != null) {
                const keys = Object.keys(rootList);
                for(var i in keys){
                  rootList[keys[i]].id = keys[i];
                  task.push(rootList[keys[i]]);
                }
            }
						resolve(1);
          }else{
						reject(0);
					}
        });
		});
		vuexContext.commit('select',task);
	},
}
export const mutations = {
  add(state,task){
    this.$fire.database.ref('task').push({
      'title': task.title, //タイトル
      'reg_date': task.date, //登録日
      'deadline': task.deadline, //期限
			'st_time': task.st_time, //開始時刻
			'fin_time': task.fin_time,//終了時刻
      'priority': task.priority, //優先度
      'memo': task.memo,//メモ
      'done': task.done //ステータス
    });			
  },
	select(state,task){
		/*state.list.splice(0);*/
		for(var i in task){
			const obj = {
      'title': task[i].title, //タイトル
      'reg_date': task[i].reg_date, //登録日
      'deadline': task[i].deadline, //期限
			'st_time': task[i].st_time, //開始時刻
			'fin_time': task[i].fin_time,//終了時刻
      'priority': task[i].priority, //優先度
      'memo': task[i].memo,//メモ
      'done': task[i].done //ステータス
			}
			
			state.list.push(obj);
		}
	},
	remove(state){
		state.list.splice(0);
	},
}
export const getters = {
  getList(state){
    return state.list;
  },
}