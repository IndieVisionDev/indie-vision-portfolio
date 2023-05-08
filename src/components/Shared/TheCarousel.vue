<template>
  <carousel
    :items-to-show="1"
    :wrapAround="true"
    :mouseDrag="true"
    :autoplay="4000"
    :transition="3000"
  >
    <slide
      :class="`bg-${slideImgPrefix}-${index}`"
      class="flex h-full bg-center bg-no-repeat"
      v-for="(slide, index) in slideData"
      :key="index"
    >
      <!-- carousel__slide -->
      <div class="flex flex-col items-center w-full py-0 my-4 lg:flex-row lg:justify-center">
        <!-- card -->
        <div
          class="flex flex-col items-center w-11/12 py-12 text-center border-4 border-solid rounded border-brand-green-1 bg-brand-white-1 md:w-6/12 lg:w-5/12 md:shadow-basic"
        >
          <!-- content -->
          <h2 class="px-4 mb-8 text-3xl font-bold text-brand-green-1">{{ slide.title }}</h2>
          <hr />
          <p class="px-4 mt-4 text-brand-pink-1">{{ slide.description }}</p>
        </div>
      </div>
    </slide>
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
    },
    slideImgPrefix: {
      type: String,
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

<style>
.carousel__track {
  @apply h-full flex items-center;
}
</style>
