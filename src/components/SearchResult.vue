<template>
  <section class="result">
    <h2>Результаты</h2>
    <div v-if="result.length > 0" class="result__list">
      <div
          v-for="user in result"
          :id="'user-' + user.id"
          :key="'user-' + user.id"
          @click="selectUser(user.id, $event)">
        <div class="result__img">
          <img src="/images/img.png" :alt="user.name">
        </div>
        <div class="result__info">
          <h3>{{ user.username }}</h3>
          <p>{{ user.email }}</p>
        </div>
      </div>
    </div>
    <p v-else-if="value.length <= 0" class="result__start">
      начните поиск
    </p>
    <p v-else class="result__empty">
      ничего не найдено
    </p>
  </section>
</template>

<script>
  import { mapGetters } from "vuex";
  import {toRaw} from "vue";

  export default {
    name: "search-result",
    data() {
      return {
        selectedId: '',
      }
    },
    computed: {
      ...mapGetters({
        value: 'searchValue',
        result: 'searchResult',
      }),
    },
    methods: {
      selectUser(id, event) {
        let selectedUser = toRaw(this.result.find(el => el.id === id));

        if (this.selectedId.length > 0) {
          this.unselectUser();
        }

        event.target.classList.add('selected');
        this.$store.commit('SET_SELECTED_USER', selectedUser);
        this.selectedId = String(id);
      },
      unselectUser() {
        let selectedElement = document.querySelector(`[id="user-${this.selectedId}"]`);

        selectedElement.classList.remove('selected');
        this.$store.commit('SET_SELECTED_USER', {});
      }
    }
  }
</script>