<script>
	import { Bar } from 'vue-chartjs';
	export default{
		extends: Bar,
		props:{
			chartdata:{
				type: Object,
				default: ()=>{},
				required: true,
			},
			options:{
				type: Object,
				default: ()=>({
					responsive: true,
					maintainAspectRatio: false
				}),
			},
		},
		mounted(){
			this.renderChart(this.chartdata,this.options);
		},
	}
</script>