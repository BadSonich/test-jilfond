<template>
  <section class="search">
    <h2>Поиск сотрудников</h2>
    <input
        v-model="value"
        type="text"
        name="search"
        placeholder="Введите Id или имя">
  </section>
</template>

<script>
  export default {
    name: "site-search",
    computed: {
      value: {
        get () {
          return this.$store.state.searchValue
        },
        set (value) {
          this.$store.commit('SET_SEARCH_VALUE', value);
          this.$store.dispatch('getResult');
        }
      }
    },
  }
</script>