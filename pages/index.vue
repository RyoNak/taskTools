<template>
	<layout-wrapper>
		<div class="graff-container flex-base between">
			<div class="graff-box">
				<Midashi><i class="fa-solid fa-crown mr"></i>優先度 TOP 5</Midashi>
				<!--<h2></h2>-->
				<BarChart :styles="BarStyles" :chartData="chartPriority" />
				<div class="table-graff">
          <dl class="flex-base al-center between table-head">
            <dt class="wid10">順位</dt>
            <dt class="wid65">タスク名</dt>
            <dt class="wid25 right">優先度スコア</dt>
          </dl>
          <dl v-for="(t,index) in rank_priority" class="flex-base al-center between" >
            <dd class="wid10"><i class="fa-solid" :class="'fa-'+ (index + 1)"></i></dd>
            <dd class="wid65">{{ t.title }}</dd>
            <dd class="wid25 right">{{ t.priority }}</dd>
          </dl> 
				</div>
			</div>
			<div class="graff-box">
				<Midashi><i class="fa-solid fa-crown mr"></i>カテゴリ分布</Midashi>
				<CircleChart :chartData="chartCategory" />
				<div class="table-graff">
          <dl class="flex-base al-center between table-head">
            <dt class="wid10">順位</dt>
            <dt class="wid65">カテゴリ名</dt>
            <dt class="wid25 right">割合(％)</dt>
          </dl>
          <dl v-for="(t,index) in rank_category" class="flex-base al-center between" >
            <dd class="wid10"><i class="fa-solid" :class="'fa-'+ (index + 1)"></i></dd>
            <dd class="wid65">{{ t.title }}</dd>
            <dd class="wid25 right">{{ Math.round((t.quant / all_category_length) * 100) }}%</dd>
          </dl> 
				</div>				
			</div>
		</div>
	</layout-wrapper>
</template>

<script>
import OrgMixin from '@/mixins/original.js';
export default {
	mixins: [OrgMixin],
	data() {
		return {
			chartPriority: {},
			chartCategory: {},
		}
	},
	computed: {
		BarStyles() {
			return {
				width: '100%',
			}
		},
		rank_priority(){
			return this.taskList.map(v=>{
				return {title: v.title, priority: v.priority};
			}).sort((a,b)=>{ return b.priority - a.priority}).slice(0,5);
		},
		rank_category(){
      const categories = this.taskList.map(v => v.category);
      let counts = {};

      for (var i in categories) {
        const key = categories[i];
        counts[key] = (counts[key]) ? counts[key] + 1 : 1;
      }
			return Object.entries(counts).map(([key,value])=>{ return {title: key,quant: value}}).sort((a,b)=>{ return b.quant - a.quant});
		},
		all_category_length(){
			let length =  0;
			this.rank_category.map(v=>{
				length += v.quant;
			});
			return length;
		}
	},
	watch: {
		taskList: {
			handler(newVal, oldVal) {
				/*優先度グラフ用*/
				this.chartPriority = {
					labels: this.rank_priority.map(v => v.title),
					datasets: [
						{
							label: ['優先度'],
							data: this.rank_priority.map(v => v.priority)
						}
					]
				};
				/*カテゴリ分布グラフ用*/
				this.chartCategory = {
					labels: this.rank_category.map(v=>v.title),
					datasets: [
						{
							label: ['タスクの比率'],
							data: this.rank_category.map(v=>v.quant)
						}
					]
				}
			},
			deep: true
		},
	},
	created() {
		this.setTask();
		this.setStore();		
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
}
</script>

<style lang="scss" scoped>
	.table-graff{
		margin-top: 2rem;
		font-size: 0.9rem;
		dl{
      dt{
        margin-bottom: 0;
      }
      dd{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }			
		}
	}
</style>