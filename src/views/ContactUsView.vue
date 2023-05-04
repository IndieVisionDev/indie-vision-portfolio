<template>
  <div class="container px-4 py-8">
    <h1 class="py-8 text-xl text-center text-white bg-brand-green-1">Contact Us</h1>
    <p class="w-full px-6 pt-12 text-center">
      At Indie Vision, we value open communication and believe that every project begins with
      understanding your needs and expectations. Whether you're looking for a consultation, have a
      question about our services, or want to discuss your next software development project, don't
      hesitate to reach out to us. Our team of dedicated professionals is here to provide you with
      the guidance and support you need to turn your vision into a reality.
    </p>
    <div class="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
      <section class="flex flex-col items-center rounded-lg bg-brand-grey-2">
        <h2
          class="w-11/12 pt-12 pb-12 mt-6 mb-4 text-3xl text-center text-white rounded-lg bg-brand-green-1 md:pb-12 text-dark"
        >
          Get in Touch
        </h2>

        <form class="w-11/12" @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-brand-grey-1" for="name"> Name </label>
            <input
              class="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-brand-grey-1 focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              v-model="formData.name"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-brand-grey-1" for="email">
              Email
            </label>
            <input
              class="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-brand-grey-1 focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              v-model="formData.email"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-brand-grey-1" for="message">
              Message
            </label>
            <textarea
              class="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-brand-grey-1 focus:outline-none focus:shadow-outline"
              id="message"
              rows="6"
              v-model="formData.message"
              required
            ></textarea>
          </div>
          <div class="text-right">
            <a
              class="px-4 py-2 mb-6 font-bold text-white rounded bg-brand-pink-1 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              :href="getMailtoLink"
            >
              Send Message</a
            >
          </div>
        </form>
      </section>
      <section>
        <h2 class="pb-8 text-3xl text-center rounded-lg md:text-left text-brand-pink-1 md:pb-4">
          Find Us...
        </h2>
        <div
          class="flex flex-col items-center border-2 border-solid rounded-lg border- bg-brand-grey-1"
        >
          <iframe
            class="w-11/12 pt-6 mb-4 rounded-lg md:pt-8 h-96"
            frameborder="0"
            allowfullscreen
            :src="getGoogleMapEndpoint"
          ></iframe>
          <div class="w-11/12 mb-4 rounded-lg text-brand-dark-1">
            <div class="mt-4 mb-4">
              <font-awesome-icon class="mr-2 text-brand-pink-1" icon="map-marker-alt" />
              <span class="text-white">2323 Wolf Ranch Pkwy #838 Georgetown, TX 78628</span>
            </div>
            <div class="mb-4">
              <font-awesome-icon class="mr-2 text-brand-pink-1" icon="phone" />
              <span class="text-white">+1 (541) 288-3502</span>
            </div>
            <div class="mb-4">
              <font-awesome-icon class="mr-2 text-brand-pink-1" icon="envelope" />
              <span class="text-white">info@indievision.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      googleMapUrl: ''
    }
  },
  computed: {
    getMailtoLink() {
      const subject = `Lead - ${this.formData.name}`;
      return 'mailto:indievision.dev@protonmail.com?subject=' + subject + '&body=' + this.formData.message;
    },
    getGoogleMapEndpoint() {
      const apiKey = import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY;
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=2323+Wolf+Ranch+Pkwy+%23838+Georgetown,+TX+78628`
    }
  },
  methods: {
    submitForm() {
      this.formData = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>
