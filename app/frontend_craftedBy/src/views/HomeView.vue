<script>
import HighLights from '@/components/HighLights.vue'
import CategoriesList from '@/components/CategoriesList.vue';
import ArtisansList from '@/components/ArtisansList.vue';

export default {
  name: 'HomeView',
  components: {
    HighLights,
    CategoriesList,
    ArtisansList,
  }
}
</script>

<template>
  <div class="flex flex-col items-center p-1 gap-2">
    <HighLights />
    <CategoriesList />
    <ArtisansList />
  </div>
</template>
