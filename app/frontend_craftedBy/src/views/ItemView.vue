<script>
import CategoryButton from '@/components/ui/CategoryButton.vue'
import ItemCard from '@/components/ui/ItemCard.vue'

export default {
  name: 'ItemView',
  component: {
    CategoryButton,
    ItemCard,
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.$Item.fetchOneItem(id);
  },
}
</script>

<template>
  <div class="flex flex-col items-center">
    <RouterLink :to="`/catalog/${$Item.item.category?.id}`">
      <CategoryButton :category="$Item.item.category?.name"/>
    </RouterLink>
    <ItemCard :item="$Item.item" />
  </div>
</template>