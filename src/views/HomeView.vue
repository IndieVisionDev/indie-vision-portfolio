<template>
  <div class="container px-4 py-8 mx-auto bg-pink-300">
    <!-- <h1  class="text-center">Indie Vision</h1>
    <h2 class="text-center">Introduction</h2> -->

    <the-carousel class="flex flex-grow h-full" :slideData="topics" />

  </div>
</template>

<script>
import TheCarousel from '@/components/Shared/TheCarousel.vue'
export default {
  components: {
    TheCarousel
  },
  mounted() {},
  data() {
    return {
      topics: [
        // Add your items here
        {
          title: 'Robust Stack',
          description:
            'At Indie Vision, we pride ourselves on working with a robust and versatile technology stack to deliver the most efficient, reliable, and high-performance solutions to our clients. Our team of experts is well-versed in the latest industry trends and committed to staying ahead of the curve, ensuring that we provide cutting-edge solutions tailored to your unique needs.',
          url: '@/assets/img/home/robust-tech.png'
        },
        {
          title: 'Communication',
          description:
            'At Indie Vision, we believe that effective communication is the key to successful projects and satisfied clients. We pride ourselves on our exceptional communication skills, ensuring that every interaction—whether between clients, developers, or other team members—is clear, efficient, and productive.',
          url: '@/assets/img/home/communication.jpg'
        },
        {
          title: 'Flexibility',
          description:
            'At Indie Vision, we understand that every client and project is unique, which is why we pride ourselves on our unmatched flexibility. Our adaptive approach allows us to tailor our services to your specific needs, ensuring that you get the best possible results, no matter the size, scope, or complexity of your project.',
          url: '@/assets/img/home/flexibility.jpg'
        }
      ]
    }
  }
}
</script>

<style></style>
