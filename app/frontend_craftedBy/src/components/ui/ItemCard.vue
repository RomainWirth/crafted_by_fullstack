<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  computed: {
    itemPrice() {
      if (!this.item.price) {
        return 'Price unknown'
      }
      return this.item.price / 100
    },
  },
}
</script>

<template>
  <div class="mt-2 h-svh w-full flex flex-col items-center gap-2">
    <div class="w-[304px] h-60">
      <img class="size-full" :src="item.imageUrl" :alt="item.name">
    </div>
    <div class="flex flex-col items-center w-full gap-2">
      <div class="mx-auto flex flex-col justify-center items-start gap-2">
        <h2>{{ item?.artisan?.name }}</h2>
        <div class="flex flex-col items-start gap-2">
          <p>Matériaux : </p>
          <template v-if="item?.materials">
            <ul class="flex gap-2" v-for="material in item?.materials" :key="material?.id">
              <li>{{ material.name }}</li>
            </ul>
          </template> 
        </div>
        <RouterLink 
          :to="`/current-artisan/${item?.artisan?.id}`" 
          class="block"
        >
          <div class="flex flex-col items-start gap-2">
            <p>Artisan :</p>
            <p>{{ item?.artisan?.companyName }}</p>
          </div>
        </RouterLink>
      </div>
      <div class="flex gap-2">
        <p>bouton 1</p>
        <p>bouton 2</p>
      </div>
      <div class="flex gap-2">
        <div>bouton -</div>
        <p>1</p>
        <div>bouton +</div>
      </div>
      <div class="flex flex-col items-center">
        <p>{{ itemPrice }} €</p>
        <button @click="$Cart.addToCart(item)" class="btn bg-tertiary rounded-full">Ajouter au Panier</button>
      </div>
      <p>{{ item.description }}</p>
      <div class="flex">
        <div>share button</div>
      </div>
    </div>
  </div>
</template>