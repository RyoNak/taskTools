<template>
	<layout-wrapper>
		<div class="graff-container flex-base between">
      <div class="graff-box">
        <h2>優先度</h2>
        <BarChart :styles="BarStyles" :chartData="chartPriority"/>
      </div>
      <div class="graff-box">
        <h2>カテゴリ分布</h2>
				<CircleChart :chartData="chartCategory"/>
      </div>
		</div>
	</layout-wrapper>
</template>

<script>

export default{
  data(){
    return {
      chartPriority: {},	
      chartCategory: {},	
    }
  },
  computed: {
    taskList(){
      //return this.$store.getters['todo/getList'];
			return this.$store.state.todo.list;
    },		
		BarStyles(){
			return {
				width: '100%',
			}
		},
  },
	watch:{
		taskList:{
			handler(newVal,oldVal){
				const c_data = JSON.parse(JSON.stringify(this.taskList));
				const titles =  c_data.map(v=>v.title);
				const priorities =  c_data.map(v=>v.priority);
				const categories = c_data.map(v=>v.category);
				let counts = {};
				
				for(var i in categories){
					const key = categories[i];
					counts[key] = (counts[key])? counts[key]+1: 1;
				}
				
				/*優先度グラフ用*/
				this.chartPriority = {
          labels: titles,
          datasets: [
            {
              label: ['優先度'],
              backgroundColor: '#f87979',
              data: priorities
            }
          ]					
				};
				/*カテゴリ分布グラフ用*/
				
			},
			deep: true
		},
	},
	created(){
		this.setTask();
				this.chartData = {
          labels: ['loading'],
          datasets: [
            {
              label: ['Data One'],
              backgroundColor: '#f87979',
              data: [1]
            }
          ]					
				};		
	},
	methods:{
		async setTask(){
			await this.$store.dispatch('todo/setTask');
		},
	},
}
</script>