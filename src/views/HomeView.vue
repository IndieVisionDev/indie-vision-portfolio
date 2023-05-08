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
            making it easy for us to accommodate any changes or additional requirements. With [Your
            Company Name], you can be confident that we will go the extra mile to deliver solutions
            that not only meet but exceed your expectations, no matter the complexity of the
            project.
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
import TheCarousel from '@/components/Shared/TheCarousel.vue'
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
