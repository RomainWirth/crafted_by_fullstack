<script>
// import { useItemStore } from '@/stores/ItemStore';
import CategoryButton from '@/components/ui/CategoryButton.vue';
import ItemSmallCard from '@/components/ui/ItemSmallCard.vue';

export default {
  name: 'CatalogView',
  component: {
    CategoryButton,
    ItemSmallCard,
  },
  async mounted() {
    const categoryId = this.$route.params.categoryId
    await this.$Item.fetchItemsInCategory(categoryId)
    this.category = this.$Item.items?.item[0]?.category?.name
  },
  data() {
    return {
      category: null
    }
  }
}
</script>

<template>
  <div class="catalog flex flex-col items-center p-2">
    <RouterLink 
      :to="`/`" 
    >
      <CategoryButton 
        :category="this.category"
        class="btn rounded-full text-white bg-primary hover:text-dark hover:bg-secondary"
      />
    </RouterLink>
    <div class="flex flex-wrap justify-center gap-2 m-2">
      <RouterLink 
        :to="`/current-item/${item.id}`" 
        v-for="item in $Item.items?.item" 
        :key="item.id"
        class="btn h-auto shadow-sm"
      >
        <ItemSmallCard :item="item"/>
      </RouterLink>
    </div>
  </div>
</template>