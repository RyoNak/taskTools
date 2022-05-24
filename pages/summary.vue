<template>
	<layout-wrapper>	
		<Midashi>アプリ概要</Midashi>
		<div class="summary-box flex-base between">
			<div class="summary-left">
        <dl class="flex-base al-center">
          <dt>アプリケーション名</dt>
          <dd>TaskTools</dd>
        </dl>
        <dl class="flex-base al-center">
          <dt>開発期間</dt>
          <dd>2週間</dd>
        </dl>
        <dl class="flex-base al-center">
          <dt>使用言語</dt>
          <dd>HTML、CSS（SCSS）、JavaScript（Vue.js）</dd>
        </dl>
        <dl class="flex-base al-center">
          <dt>フレームワーク</dt>
          <dd>Nuxt.js</dd>
        </dl>
        <dl class="flex-base al-center">
          <dt>開発環境</dt>
          <dd>
            <p>Vue.js 2.6.14</p>
            <p>Nuxt.js 2.15.8</p>
            <p>Chart.js 2.9.3</p>
            <p>vue-chartjs 3.5.1</p>
            <p>firebase 9.8.1 （RealtimeDatabase）</p>
          </dd>
        </dl>
        <dl class="flex-base al-center">
          <dt>バージョン管理ツール</dt>
          <dd>GitHub</dd>
        </dl>
        <dl class="flex-base al-center">
          <dt>ホスティングサービス</dt>
          <dd>Netlify</dd>
        </dl>
			</div>
			<div class="summary-right">
				<h3><i class="fa-solid fa-gear mr"></i>操作方法</h3>
				<div class="desc-box">
					<h4>ホーム</h4>
					<p>上部メニュー「ホーム」より優先度の高いタスクや担当中の業務のカテゴリ分布を確認できます。</p>
				</div>				
				<div class="desc-box">
					<h4>タスク一覧</h4>
					<p>上部メニュー「タスク一覧」よりタスクを確認できます。左上のチェックボックスを選択するとタスクを状態で絞り込むことができます。右上のボックスから好きな順序に並べ替えることができます。タスクを右クリックすると対象のタスクを削除することができます。タスクをクリックすると登録済みのタスクを編集できます。</p>
				</div>				
				<div class="desc-box">
					<h4>タスク追加</h4>
					<p>上部メニュー「タスク追加」より新規タスクを作成できます。タイトルのみ必須項目です。入力が完了したら「追加」ボタンをクリックします。</p>
				</div>			
				<div class="desc-box">
					<h4>カテゴリ追加</h4>
					<p>上部メニュー「カテゴリ追加」より新規カテゴリを作成できます。FontAwesomeのアイコンをiタグで貼り付けるとカテゴリのアイコンとして登録されます。画面下部に表示されているカテゴリ名を右クリックするとカテゴリを削除できます。</p>
				</div>
			</div>
		</div>
		
  <p></p>
	</layout-wrapper>
</template>

<script>
</script>
<style lang="scss" scoped>
	.summary-box{
    .summary-left{
      border: 1px solid #ccc;
      padding: 1rem;
      width: 52%;		
    }
    .summary-right{
      width: 44%;
    }		
    dl{
      font-size: 0.9rem;
	    dt{
				width: 150px;
        margin: 0 20px 0 0;
      }			
      dd p{
        line-height: 1.5;
      }			
    }		
    h3{
      margin-bottom: 2rem;
    }
    h4{
      margin-bottom: 0.5rem;
    }		
    .desc-box{ 
      margin-bottom: 1rem;
      p{
        font-size: 0.9rem;
        line-height: 1.5;
      }		
    }		
	}	
</style>

