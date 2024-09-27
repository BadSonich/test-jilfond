<template>
  <div class="container">
    <header>
      <h1>Жилфонд</h1>
      <div>Пользователь</div>
    </header>

    <main>
      <section class="search">
        <h2>Поиск сотрудников</h2>
        <input type="text" name="search" placeholder="Введите Id или имя ">
      </section>

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

      <section class="selected-user">
        <p v-if="false">Выберите сотрудника, чтобы посмотреть его профиль</p>
        <div v-else>
          <div class="selected-user__img">
            <img src="/images/img.png" alt="user">
          </div>
          <div class="selected-user__info">
            <h2>Ervin Howell</h2>
            <div><span>email:</span> Shanna@melissa.tv</div>
            <div><span>phone:</span> 010-692-6593 x09125</div>
            <div>
              <h3>О себе:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
  }
</script>