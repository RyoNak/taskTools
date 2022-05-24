<script>
import { Bar, mixins } from 'vue-chartjs'
import chartjsPluginColorschemes from 'chartjs-plugin-colorschemes'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  data () {
    return {
      options: {
				responsive: true,
				scales: {
					xAxes: [{
						ticks: {
							display: false
						}
					}]
				},
				legend:{
					position: 'bottom',
				},
				plugins:{
					colorschemes: {
						scheme: 'brewer.BrBG3',
						reverse: true
					},
				},				
			}
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>