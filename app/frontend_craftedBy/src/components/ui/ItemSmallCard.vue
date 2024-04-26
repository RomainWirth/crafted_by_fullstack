<script>
export default {
  name: 'ItemSmallCard',
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  computed: {
    displayedPrice() {
      if(this.item.price === null) {
        return "price unknown";
      }
      return this.item.price / 100;
    }
  }
}
</script>

<template>
  <div class="relative m-2 flex flex-col items-start h-60 w-60 rounded-lg overflow-hidden shadow-lg">
    <img class="w-full h-full" :src="item.imageUrl" :alt="item.name">
    <div class="absolute bottom-0 flex flex-col items-center h-24 w-60 p-1 gap-1 bg-slate-700 bg-opacity-70 text-white">
      <h4 class="self-start w-full truncate">{{ item.name }}</h4>
      <p>{{ item.artisan?.companyName }}</p>
      <p class="self-end">p.u. : {{ displayedPrice }} €</p>
    </div>
  </div>
</template>