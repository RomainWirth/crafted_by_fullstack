<script>
// import ItemSmallCard from '@/components/ui/ItemSmallCard.vue'

export default {
  name: 'ArtisanView',
  // components: {
  //   ItemSmallCard,
  // },
  async mounted() {
    const artisanId = this.$route.params.id
    await this.$Artisan.fetchOneArtisan(artisanId)
    await this.$Artisan.fetchArtisanItem(artisanId)
  }
}
</script>

<template>
  <!-- {{ $Artisan.artisan }} -->
  <div class="flex flex-col items-center m-auto gap-2">
    <h1 class="font-bold">{{ $Artisan.artisan?.artisan?.companyName }}</h1>
    <div class="flex flex-col items-center m-auto gap-2">
      <div class="flex flex-col items-start gap-2">
        <h4 class="font-bold">A propos :</h4>
        <p>{{ $Artisan.artisan?.artisan?.about }}</p>
      </div>
      <div class="flex flex-col items-start gap-2">
        <h4 class="font-bold">Techniques de fabrication :</h4>
        <p>{{ $Artisan.artisan?.artisan?.craftingDescription }}</p>
      </div>
    </div>
    <template v-if="$Artisan.artisan?.artisan?.specialty">
      <div class="flex flex-col items-start gap-2">
        <h4 class="font-bold">Spécialité(s) : </h4>
        <ul v-for="specialty in $Artisan.artisan?.artisan?.specialty" :key="specialty.id">
          <li>{{ specialty.name }}</li>
        </ul>
      </div>
    </template>
  </div>
  <!-- {{ $Artisan.artisanItems.item }} -->
  <div class="flex flex-col items-center gap-2">
    <h4 class="self-start font-bold">Mes Articles : </h4>
    <div class="flex flex-row justify-center m-auto gap-2 flex-wrap">
      <RouterLink 
        v-for="item in $Artisan.artisanItems.item" 
        :to="`/current-item/${item.id}`" 
        :key="item.id"
        class="block"
      >
        <div class="relative w-[304px] h-60 rounded-lg overflow-hidden">
          <img class="size-full" :src="item.imageUrl" :alt="item.name">
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-grey-light opacity-30 z-10 w-48 h-20 rounded-lg">
          </div>
          <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center font-bold">{{item.name}}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style></style>