<template>
	<layout-wrapper>
		<BarChart :chartdata="chartdata"/>
	</layout-wrapper>
</template>

<script>

export default{
  data(){
    return {
      chartdata: {
        labels: ['January','Feburary','March','April'],
        datasets: [
          {
            label: ['Data One'],
            backgroundColor: '#f87979',
            data: [40,30,10,25]
          }
        ]
      },				
    }
  },
  computed: {
    taskList(){
      return this.$store.getters['todo/getList'];
    },		
  },
	watch:{
		taskList:{
			handler(newVal,oldVal){
				const c_data = JSON.parse(JSON.stringify(this.taskList));
				const titles =  c_data.map(v=>v.title);
				const priorities =  c_data.map(v=>v.priority);
				
				console.log(priorities);
				this.chartdata.labels = titles;
				this.chartdata.datasets[0].data = priorities;
			},
			deep: true
		},
	},
	created(){
		this.setTask();
	},
	methods:{
		async setTask(){
			await this.$store.dispatch('todo/setTask');
		},
	},
}
</script>