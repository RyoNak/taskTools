<script>
import { Doughnut, mixins } from 'vue-chartjs';
import chartjsPluginColorschemes from 'chartjs-plugin-colorschemes';
	
export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  data () {
    return {
      options: {
				responsive: true,
				legend: {
					position: 'right',			
				},	
				plugins:{
					colorschemes: {
						scheme: 'brewer.SetTwo7',
						reverse: false
					},
				},
			}
    }
  },
  mounted () {
    this.addPlugin({
      afterDraw(chart, go) {
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset, i) => {
          let dataSum = 0;
          dataset.data.forEach((element) => {
            dataSum += element;
          });

          const meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
            meta.data.forEach(function (element, index) {
              // フォントの設定
              const fontSize = 15;
              const fontStyle = 'normal';
              const fontFamily = 'Zen Maru Gothic';
              ctx.fillStyle = '#fff';
              // 設定を適用
              ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

              // ラベルをパーセント表示に変更
              const labelString = chart.data.labels[index];
              const dataString = (Math.round(dataset.data[index] / dataSum * 100)).toString() + '%';

              // positionの設定
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';

              const padding = -2;
              const position = element.tooltipPosition();
              // ツールチップに変更内容を表示
              ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding); // title
              ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);  // データの百分率

              // 凡例の位置調整
              const legend = chart.legend;
              legend.top = chart.height - (legend.height / 2) - (legend.top / 2);
            });
          }
        });
			}
		});
    this.renderChart(this.chartData, this.options);
  }
}
</script>