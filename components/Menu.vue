<template>
	<nav>
		<ul>
			<li><nuxt-link to="/" :class="{'active': $route.name === 'index'}"><i class="fa-light fa-house mr"></i>ホーム</nuxt-link></li>
			<li><nuxt-link to="/list" :class="{'active': $route.name === 'list'}"><i class="fa-light fa-list-check mr"></i>タスク一覧</nuxt-link></li>
			<li><nuxt-link to="/newTask" :class="{'active': $route.name === 'newTask'}"><i class="fa-solid fa-file-circle-plus mr"></i>タスク追加</nuxt-link></li>
			<li><nuxt-link to="/newCategory" :class="{'active': $route.name === 'newCategory'}"><i class="fa-solid fa-folder mr"></i>カテゴリ追加</nuxt-link></li>
			<li><nuxt-link to="/summary" :class="{'active': $route.name === 'summary'}"><i class="fa-light fa-book-open mr"></i>アプリ概要</nuxt-link></li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name: "Menu",
	}
</script>

<style scoped>
	nav{
		height: 100%;
	}
	ul{
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		align-content: center;
	}
	li{
		height: 100%;
		min-width: 160px;
		list-style: none;
		text-align: center;
		cursor: pointer;
		transition: all .3s ease;
	}
	li:hover{
		background: #F7EDF0;
		border-color: #F7EDF0;
		color: #0E181B;
	} 
  li a{
		display: flex;
		align-items: center;
		justify-content: center;   
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #F7EDF0;
    user-select: none;
    border: 2px solid transparent;
  }
  li:hover a{
    color: #0E181B;
  }   
  li a.active{
    background: #F7EDF0;
    color: #0E181B;
    border-color: #F7EDF0;
  }
</style>