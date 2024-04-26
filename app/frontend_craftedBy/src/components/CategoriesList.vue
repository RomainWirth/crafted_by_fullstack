<script>
import CategoryButton from './ui/CategoryButton.vue';

export default {
  name: 'CategoriesList',
  components: {
    CategoryButton,
  },
  async mounted() {
    await this.$Item.fetchCategories();
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-center rounded-t-xl overflow-hidden mt-2">
    <h4 class="bg-secondary w-full py-1 text-center">Our categories</h4>
    <!-- ADD v-for -->
    <div class="grid grid-cols-1 m-auto py-2 gap-2 overflow-y-scroll h-[250px] w-full max-w-[1024px] sm:grid-cols-3 sm:h-full sm:w-1/2"> 
      <RouterLink 
        v-for="category in $Item.categories"
        :to="`/catalog/${category.id}`"
        :key="category.id"
        class="block w-full my-2 py-2 bg-tertiary-light rounded-lg shadow-lg border-dark border-2 sm:w-full sm:h-24 hover:bg-primary hover:text-white hover:border-white"
      >
        <CategoryButton 
          :category="category.name"
        />
      </RouterLink>
    </div>
  </div>
</template>