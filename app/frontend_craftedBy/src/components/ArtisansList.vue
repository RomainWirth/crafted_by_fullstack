<script>
import ArtisanSmallCard from './ui/ArtisanSmallCard.vue';

export default {
  name: 'ArtisansList',
  components: {
    ArtisanSmallCard,
  },
  async mounted() {
    await this.$Artisan.fetchArtisans();
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-center rounded-t-xl overflow-hidden mt-2">
    <h4 class="bg-secondary w-full py-1 text-center">Artisans</h4>
    <!-- ADD v-for -->
    <div class="flex justify-center flex-wrap m-auto py-2 gap-2 overflow-x-scroll h-auto w-full">
      <RouterLink 
        v-for="artisan in $Artisan.artisans" 
        :to="`/current-artisan/${artisan.id}`" 
        :key="artisan.id"
        class="block w-[304px] bg-tertiary rounded-lg border-2 border-dark hover:bg-dark hover:text-white"
      >
        <ArtisanSmallCard :artisan="artisan"/>
      </RouterLink>
    </div>
  </div>
</template>