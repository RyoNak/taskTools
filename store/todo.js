export const state = () => ({
    list: [{'title': 'Google広告打ち合わせ','date': '2022-04-06','priority': 98,'memo':'新規担当者との顔合わせ','done':false}],
});
export const actions = {
  addTask(vuexContext, task){
    vuexContext.commit('add',task);
  },
}
export const mutations = {
  add(state,task){
    state.list.push({
      'title': task.title,
      'date': task.date,
      'priority': task.priority,
      'memo': task.memo,
      'done': task.done
    });
  }
}
export const getters = {
  getList(state){
    return state.list;
  },
}