<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full h-full text-center">
    <h5>{{ category }}</h5>
  </div>
</template>