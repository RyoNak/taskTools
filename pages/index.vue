<template>
	<layout-wrapper>
    <div class="task-area">
      <ul>
        <li v-for="t in taskList">{{ t.title }}</li>
      </ul>
    </div>
	</layout-wrapper>
</template>

<script>

export default{
  data(){
    return {

    }
  },
  computed: {
    taskList(){
      return this.$store.getters['todo/getList'];
    }
  },
}
</script>

<style>

</style>