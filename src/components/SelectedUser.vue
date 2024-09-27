<template>
  <section class="selected-user">
    <div v-if="Object.keys(user).length > 0">
      <div class="selected-user__img">
        <img src="/images/img.png" alt="user">
      </div>
      <div class="selected-user__info">
        <h2>{{ user.name }}</h2>
        <div><span>email:</span> {{ user.email }}</div>
        <div><span>phone:</span> {{ user.phone }}</div>
        <div>
          <h3>О себе:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <p v-else>
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>
  </section>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "selected-user",
    computed: {
      ...mapGetters({
        user: 'selectedUser',
      }),
    },
  }
</script>