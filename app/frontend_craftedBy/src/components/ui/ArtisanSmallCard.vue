<script>
export default {
  name: 'ArtisanSmallCard',
  props: {
    artisan: {
      type: Object,
      required: true,
    }
  },
  computed: {
    specialty() {
      if(!this.artisan.specialty) {
        return 'Aucune spécialité à afficher'
      }
      return this.artisan.specialty
    }
  }
}
</script>

<template>
  <div class="size-auto p-2 flex flex-col items-center">
    <h4>{{ artisan.user.firstname }} {{artisan.user.lastname}}</h4>
    <h5>{{ artisan.companyName }}</h5>
    <div v-for="specialty in artisan.specialty" :key="specialty.id" class="flex flex-col items-center">
      <p>spécialité : {{ specialty.name ? specialty.name : 'pas de spécialité' }}</p>
    </div>
  </div>
</template>