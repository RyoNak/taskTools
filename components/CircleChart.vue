<script>
import { Doughnut, mixins } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>