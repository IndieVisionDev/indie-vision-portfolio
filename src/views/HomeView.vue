<template>
  <div>
    <br />
    <the-carousel class="flex" :slideData="topics" slideImgPrefix="home" />
    <div class="flex flex-col w-full py-12 text-brand-grey-1">
      <div class="mb-12 text-center md:text-left md:flex md:justify-center">
        <Transition name="homeContent1">
          <p v-if="hasSlidText.homeContent" class="px-4 md:w-5/12 md:mr-4 md:pt-8" >
            At <span class="text-xl text-brand-pink-1">Indie Vision</span>, we harness the power of
            a robust stack of technologies to develop cutting-edge solutions tailored to your
            specific needs. Our team of experienced professionals has expertise in Angular, NgRx,
            RxJS, Vue, Tailwind CSS, Pinia, Node, Firebase, and SCSS. With our diverse skillset and
            strong technical background, we pride ourselves on our ability to adapt to any project
            and deliver exceptional results.
          </p>
        </Transition>
        <br />
        <Transition name="homeContent2">
          <p  v-if="hasSlidText.homeContent" class="p-4 text-center md:text-white rounded-3xl md:w-5/12 md:bg-brand-grey-1 md:p-8">
            Communication and flexibility are the cornerstones of our approach, ensuring seamless
            collaboration with clients and smooth transitions between project phases. Our commitment
            to open and transparent communication ensures that our clients are always in the loop,
            making it easy for us to accommodate any changes or additional requirements. With Indie Vision, you can be confident that we will go the extra mile to deliver solutions
            that meet and exceed your expectations.
          </p>
        </Transition>
      </div>
      <blockquote
        class="p-4 text-2xl italic text-center border-l-4 border-gray-500 text-brand-green-1 quote"
      >
        "Code is like poetry; it tells a story when done right." - Andy Hunt
      </blockquote>
    </div>
  </div>
</template>

<script>
import TheCarousel from '@/components/Shared/TheCarousel.vue';
export default {
  mounted() {
    this.hasSlidText.homeContent = true;
  },
  data() {
    return {
      hasSlidText: {
        homeContent: false,
      },
      topics: [
        // Add your items here
        {
          title: 'Robust Stack',
          description:
            'We pride ourselves on working with a robust and versatile technology stack to deliver the most efficient, reliable, and high-performance solutions to our clients. Our team of experts is well-versed in the latest industry trends and committed to staying ahead of the curve, ensuring that we provide cutting-edge solutions tailored to your unique needs.',
          url: '@/assets/img/home/robust-tech.png',
          slideBackground: 'bg-home-0',
        },
        {
          title: 'Communication',
          description:
            'At the core of our values is the belief that effective communication is the key to unlocking successful projects and satisfied clients. Exceptional communication skills are a source of pride for us, and we make sure that every interaction is clear, efficient, and productive. Our focus on seamless communication between clients, developers, and other team members enables us to deliver exceptional results every time.',
          url: '@/assets/img/home/communication.jpg',
          slideBackground: 'bg-home-1',
        },
        {
          title: 'Flexibility',
          description:
            "At the heart of our philosophy is the understanding that each client and project is unique. Our unmatched flexibility allows us to adapt to your specific needs, ensuring that you receive the best possible results, regardless of the project's size, scope, or complexity. We take pride in our ability to tailor our services to your requirements, providing you with a personalized experience that exceeds your expectations.",
          url: '@/assets/img/home/flexibility.jpg',
          slideBackground: 'bg-home-2',
        }
      ]
    }
  },
  components: {
    TheCarousel
  },
}
</script>

<style scoped>
.quote {
  quotes: '“' '”' '‘' '’';
}

.quote:before {
  content: open-quote;
  margin-right: 0.25rem;
}

.quote:after {
  content: close-quote;
  margin-left: 0.25rem;
}

.homeContent1-enter-from {
  opacity: 0;
  /* transform: scale(0.6); */
  transform: translateX(-50px);
}

.homeContent1-enter-to {
  opacity: 1;
  /* transform: scale(1); */
  transform: translateX(0);
}

.homeContent1-enter-active {
  transition: all 2s ease;
}
</style>
