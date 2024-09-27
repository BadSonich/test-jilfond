<template>
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

  export default {
    name: "main-view",
    components: {
      SelectedUser,
      SearchResult,
      SiteSearch
    }
  }
</script>