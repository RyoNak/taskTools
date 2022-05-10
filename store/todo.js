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
      'title': task.title,
      'date': task.date,
      'priority': task.priority,
      'memo': task.memo,
      'done': task.done
    });			
  },
	select(state,task){
		/*state.list.splice(0);*/
		for(var i in task){
			const obj = {
				'title': task[i].title,
        'date': task[i].date,
        'priority': task[i].priority,
        'memo': task[i].memo,
        'done': task[i].done
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