export const state = () => ({
    categories: [],
});
export const actions = {
  addCategory(vuexContext, category){
    vuexContext.commit('add',category);
  },
/*	async setTask(vuexContext){
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
	updateTask(vuexContext,task){
		vuexContext.commit('update',task);
	},
	deleteTask(vuexContext,id){
		vuexContext.commit('delete',id);
	},*/
}
export const mutations = {
  add(state,category){
    this.$fire.database.ref('category').push({
      'name': category.name, //カテゴリ名
      'icon': category.icon //アイコンの種類
    });		
  },
/*	select(state,task){
		state.list.splice(0);
		for(var i in task){
			const obj = {
			'id': task[i].id,
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
	update(state,task){
		console.log(task);
		this.$fire.database.ref('task').child(task.id).update({
      title: task.title,
      deadline: task.deadline,
      st_time: task.st_time,
      fin_time: task.fin_time,
      priority: task.priority,
      memo: task.memo,
      done: task.done			
		});
	},
	delete(state,id){
		console.log(id);
		this.$fire.database.ref('task').child(id).remove();
	}*/
}
export const getters = {
  getCategories(state){
    return state.categories;
  },
}