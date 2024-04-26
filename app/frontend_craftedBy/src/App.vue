<script>
import HeadBand from './components/ui/HeadBand.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  components: {
    HeadBand,
    SiteHeader,
    SiteFooter,
  },
};
</script>

<template>
  <HeadBand />
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>

<style>
</style>
