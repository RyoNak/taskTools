<template>
	<nav :class="{'mobile-menu': is_mobile}">
		<ul>
			<li>
				<nuxt-link to="/" :class="{'active': $route.name === 'index'}">
					<i class="fa-light fa-house" :class="{'mr': !is_mobile, 'fa-2x': is_mobile}"></i>
					<span>ホーム</span>
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/list" :class="{'active': $route.name === 'list'}">
					<i class="fa-light fa-list-check" :class="{'mr': !is_mobile, 'fa-2x': is_mobile}"></i>
					<span>タスク一覧</span>
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/newTask" :class="{'active': $route.name === 'newTask'}">
					<i class="fa-solid fa-file-circle-plus" :class="{'mr': !is_mobile, 'fa-2x': is_mobile}"></i>
					<span>タスク追加</span>
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/newCategory" :class="{'active': $route.name === 'newCategory'}">
					<i class="fa-solid fa-folder" :class="{'mr': !is_mobile, 'fa-2x': is_mobile}"></i>
					<span>カテゴリ追加</span>
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/summary" :class="{'active': $route.name === 'summary'}">
					<i class="fa-light fa-book-open" :class="{'mr': !is_mobile, 'fa-2x': is_mobile}"></i>
					<span>アプリ概要</span>
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	import OrgMixin from '@/mixins/original.js';
	export default{
		name: "Menu",
		mixins: [OrgMixin],
	}
</script>

<style lang="scss" scoped>
	nav{
		height: 100%;
		&.mobile-menu{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100px;
			@include mobile{
				height: 70px;
			}
			ul{
				padding: 0;
				li{
					width: 20%;
					min-width: inherit;
					background: $white;
					a{
						color: $main;
						display: flex;
						align-items: center;
						width: 100%;
						&.active{
							background: $gray;	
						}
					}
					span{
						display: none;
					}
				}
			}
		}
    ul{
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
      li{
        height: 100%;
        min-width: 160px;
        list-style: none;
        text-align: center;
        cursor: pointer;
        transition: all .3s ease;
				&:hover{
          background: $white;
          border-color: $white;
          color: $main;		
          a{
						color: $main;
					}   					
				}
        a{
        	display: flex;
          align-items: center;
          justify-content: center;   
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: $white;
          user-select: none;
          border: 2px solid transparent;
					&.active{
            background: $white;
            color: $main;
            border-color: $white;
          }
        }				
      }			
    }		
	}
</style>