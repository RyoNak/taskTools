export const state = () => ({
    categories: [],
});
export const actions = {
  addCategory(vuexContext, category){
    vuexContext.commit('add',category);
  },
	async setCategory(vuexContext){
		let cats = [];
		//タスクを空にする
		vuexContext.commit('remove');
		//同期的にfirebaseからデータを取得
		await new Promise((resolve,reject)=>{
			this.$fire.database.ref('category').on("value",(obj)=>{
          if(obj){
            const rootList = obj.val();
            if(rootList != null) {
                const keys = Object.keys(rootList);
                for(var i in keys){
                  rootList[keys[i]].id = keys[i];
                  cats.push(rootList[keys[i]]);
                }
            }
						resolve(1);
          }else{
						reject(0);
					}
        });
		});
		vuexContext.commit('select',cats);
	},
	deleteCategory(vuexContext,id){
		vuexContext.commit('delete',id);
	},
}
export const mutations = {
  add(state,category){
    this.$fire.database.ref('category').push({
      'name': category.name, //カテゴリ名
      'icon': category.icon //アイコンの種類
    });		
  },
	select(state,cats){

		for(var i in cats){
			const obj = {
				'id': cats[i].id,
				'name': cats[i].name,
      	'icon': cats[i].icon, //タイトル
			}
			
			state.categories.push(obj);
		}
	},
	remove(state){
		state.categories.splice(0);
	},
	delete(state,id){
		this.$fire.database.ref('category').child(id).remove();
	}
}
export const getters = {
  getCategories(state){
    return state.categories;
  },
}