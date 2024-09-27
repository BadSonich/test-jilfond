<template>
  <section class="result">
    <h2>Результаты</h2>
    <div v-if="false" class="result__list">
      <div>
        <div class="result__img">
          <img src="/images/img.png" alt="user">
        </div>
        <div class="result__info">
          <h3>Bret</h3>
          <p>Sincere@april.biz</p>
        </div>
      </div>
    </div>
    <p v-else class="result__empty">
      ничего не найдено
    </p>
    <p class="result__start">
      начните поиск
    </p>
  </section>
</template>

<script>
  export default {
    name: "search-result"
  }
</script>