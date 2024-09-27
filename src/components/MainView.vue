<template>
  <div v-if="loader" class="preloader"></div>
  <main>
    <SiteSearch></SiteSearch>
    <SearchResult></SearchResult>
    <SelectedUser></SelectedUser>
  </main>
</template>

<script>
  import SiteSearch from "@/components/SiteSearch.vue";
  import SearchResult from "@/components/SearchResult.vue";
  import SelectedUser from "@/components/SelectedUser.vue";
  import {mapGetters} from "vuex";

  export default {
    name: "main-view",
    components: {
      SelectedUser,
      SearchResult,
      SiteSearch
    },
    computed: {
      ...mapGetters({
        loader: 'showLoader',
      }),
    },
  }
</script>