<template>
  <carousel
    :items-to-show="1"
    class=" bg-brand-pink-1"
    :wrapAround="true"
    :mouseDrag="false"
    :autoplay="6000"
    :transition="3000"
  >
    <slide class="flex bg-blue-700" v-for="(slide, index) in slideData" :key="index">
      <div
        class="flex flex-col flex-grow w-full py-0 bg-blue-200 bg-contain lg:flex-row lg:justify-center bg-communication"
      >
        <div
          class="flex items-center justify-center rounded shadow-none md:shadow-basic bg-brand-white-1 md:w-6/12 opacity-95"
        >
          <div class="flex flex-col items-center py-12 text-center">
            <h2 class="mb-4 text-3xl font-bold text-brand-green-1">{{ slide.title }}</h2>
            <hr />
            <p class="px-4 mt-4 text-brand-pink-1">{{ slide.description }}</p>
          </div>

          <!-- <template #addons>
            <navigation />
            <pagination />
          </template> -->
        </div>
      </div>
    </slide>
    <!-- <template #addons>
      <navigation />
      <pagination />
    </template> -->
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  props: {
    slideData: {
      type: Object,
      required: true
    }
  },
  components: {
    Carousel,
    Slide
    // Pagination,
    // Navigation
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
ol {
  height: 100%;
}
</style>
