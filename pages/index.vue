<template>
	<layout-wrapper>
		<div class="graff-container flex-base between">
			<div class="graff-box">
				<h2>優先度 TOP 5</h2>
				<BarChart :styles="BarStyles" :chartData="chartPriority" />
			</div>
			<div class="graff-box">
				<h2>カテゴリ分布</h2>
				<CircleChart :chartData="chartCategory" />
			</div>
		</div>
	</layout-wrapper>
</template>

<script>

export default {
	data() {
		return {
			chartPriority: {},
			chartCategory: {},
		}
	},
	computed: {
		taskList() {
			//return this.$store.getters['todo/getList'];
			return this.$store.state.todo.list;
		},
		BarStyles() {
			return {
				width: '100%',
			}
		},
	},
	watch: {
		taskList: {
			handler(newVal, oldVal) {
				/*優先度グラフ用*/
				const c_data = JSON.parse(JSON.stringify(this.taskList));
				const c_data_sorted = c_data.sort((a,b)=>b.priority - a.priority);	
				const c_data_sliced = c_data_sorted.slice(0,5);

				const titles = c_data_sliced.map(v => v.title);
				const priorities = c_data_sliced.map(v => v.priority);

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

				const categories = c_data.map(v => v.category);
				let counts = {};

				for (var i in categories) {
					const key = categories[i];
					counts[key] = (counts[key]) ? counts[key] + 1 : 1;
				}

				this.chartCategory = {
					labels: Object.keys(counts),
					datasets: [
						{
							label: ['タスクの比率'],
							backgroundColor: '#f87979',
							data: Object.values(counts)
						}
					]
				}
			},
			deep: true
		},
	},
	created() {
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
	methods: {
		async setTask() {
			await this.$store.dispatch('todo/setTask');
		},
	},
}
</script>