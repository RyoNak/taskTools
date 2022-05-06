export const state = () => ({
    list: [
			{'title': 'Google広告打ち合わせ','date': '2022-04-06','st_time': '16:00','fin_time': '17:00','priority': 98,'memo':'新規担当者との顔合わせ','done':'comp'},
			{'title': 'TNC放映スケジュール確認','date': '2022-04-03','st_time': '16:00','fin_time': '17:00','priority': 98,'memo':'20:00～ 会食予定','done':'yet'},
			{'title': '新規キャンペーンLP制作','date': '2022-04-15','st_time': '16:00','fin_time': '17:00','priority': 98,'memo':'デザイナー3人、コーダー2人出席','done':'hold'},
			{'title': '社内マナーセミナー','date': '2022-05-01','st_time': '16:00','fin_time': '17:00','priority': 98,'memo':'新入社員向けの資料制作','done':'doing'},
		],
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