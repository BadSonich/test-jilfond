<template>
  <div class="container">
    <SiteHeader></SiteHeader>
    <MainView></MainView>
  </div>
</template>

<script>
  import SiteHeader from "@/components/SiteHeader.vue";
  import MainView from "@/components/MainView.vue";

  export default {
    name: 'App',
    components: {
      MainView,
      SiteHeader
    },
  }
</script>