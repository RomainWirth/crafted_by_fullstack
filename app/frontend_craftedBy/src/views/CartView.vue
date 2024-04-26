<script>
import ItemSmallCard from '@/components/ui/ItemSmallCard.vue';

export default {
  name: 'CartView',
  component: {
    ItemSmallCard,
  },
  computed: {
    totalItems() {
      const items = this.$Cart.items;
      console.log(items);
      return items.length();
    },
  }
}
</script>

<template>
  <div class="m-1 flex flex-col items-center min-h-svh">
    <h2>Mon panier</h2>
    <div class="flex flex-col justify-between items-center">
      <!-- <p>Nombre d'articles(s) : {{ totalItems }}</p> -->
      <p>Prix total : {{ $Cart.getTotalPrice }} €</p>
    </div>
    <div>
      <template v-if="$User.token">
        <div>
          <RouterLink to="/" custom v-slot="{navigate}">
            <button @click="navigate" role="link">Payer</button>
          </RouterLink>
        </div>
      </template>
      <template v-else>
        <div>
          <RouterLink to="/login" custom v-slot="{navigate}">
            <button @click="navigate" role="link">Se connecter pour payer</button>
          </RouterLink>
        </div>
      </template>
    </div>
    <div 
      v-for="item in $Cart.items"
      :key="item.id"
    >
      <div class="p-1 flex flex-col justify-between items-center gap-1 bg-tertiary-light rounded-md shadow-sm">
        <i-ph-x 
          @click="$Cart.removeFromCart(item)"
          class="self-end"
        />
        <ItemSmallCard
          :item="item"
        />
      </div>
      <div class="w-4/5 h-1 border-b-1 border-dark"></div>
    </div>
  </div>
</template>