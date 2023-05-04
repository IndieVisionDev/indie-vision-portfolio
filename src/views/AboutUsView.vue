<template>
  <div class="container px-4 py-8 mx-auto">
    <!-- Values Section -->
    <section class="flex justify-center py-12 text-center bg-brand-grey-2">
      <div class="container flex flex-col items-center justify-center md:px-6">
        <Transition name="ourValuesSlide" class="pb-12">
          <span v-if="hasSlidText.ourValues">
            <h2 class="text-3xl text-center text-brand-grey-1">Our Values</h2>
            <small>Who we are</small>
          </span>
        </Transition>

        <ul class="grid w-4/5 gap-6 list-none md:w-full lg:grid-cols-5">
          <li
            v-for="(value, index) in values"
            :key="index"
            class="p-6 mx-1 bg-white rounded-lg shadow-md slide-in-from-left"
            @mouseover="startAnimation(index)"
            @mouseleave="stopAnimation(index)"
            :style="{ animationDelay: `${index * 300}ms` }"
          >
            <div :class="`icon icon-${index + 1}`"></div>

            <p class="text-dark">{{ value.description }}</p>
            <Transition name="shrink">
              <div v-show="animationTimers[index]" :class="`icon icon-${index + 1}`">
                <h3 class="mt-4 text-xl text-dark text-brand-pink-1">{{ value.title }}</h3>
              </div>
            </Transition>
          </li>
        </ul>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="flex items-center justify-center px-4 py-12">
      <div class="container flex flex-col items-center text-center">
        <h2 class="pb-12 text-4xl text-brand-grey-1">Our Mission</h2>
        <Transition name="ourMissionSlide">
          <p
            v-if="hasSlidText.ourMission"
            class="leading-relaxed text-dark md:text-2xl md:max-w-5xl"
          >
            At Indie Vision, we believe in producing high-quality work with an emphasis on
            flexibility to respond to our client's needs. Our team is dedicated to providing
            exceptional software solutions tailored to the unique requirements of each project. Our
            mission is to exceed expectations and help businesses achieve their goals through
            innovative, user-friendly software.
          </p>
        </Transition>
      </div>
    </section>

    <!-- Past Clients Section -->
    <section class="flex justify-center py-12 bg-brand-grey-2">
      <div class="flex flex-col items-center w-full">
        <Waypoint @change="onScrollToPastClients" />
        <Transition name="pastClientsSlide">
          <h2 v-if="hasSlidText.pastClients" class="pb-6 text-3xl text-center text-brand-grey-1">
            Past Clients
          </h2>
        </Transition>
        <TransitionGroup name="clients" tag="div" class="flex flex-col w-11/12 md:w-8/12">
          <a v-for="client in clients" :key="client.id" :href="client.url" target="_blank">
            <div
              class="p-6 my-6 text-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl"
            >
              <img :src="client.image" :alt="client.name" class="mx-auto" />
              <p class="flex-grow text-brand-pink-1 text-dark">
                {{ client.description }}
              </p>
            </div>
          </a>
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<script>
import { Waypoint } from 'vue-waypoint';
export default {
  mounted() {
    this.hasSlidText.ourValues = true;
    this.hasSlidText.ourMission = true;
  },
  data() {
    return {
      hasSlidText: {
        ourValues: false,
        ourMission: false,
        pastClients: false
      },
      values: [
        {
          title: 'Code Quality',
          description:
            'We prioritize code quality by adhering to best practices and conducting thorough code reviews.'
        },
        {
          title: 'User-centric Design',
          description:
            'We focus on user experience and design, ensuring that our software is intuitive and easy to use.'
        },
        {
          title: 'Security',
          description:
            'We take security seriously, implementing measures to protect sensitive data and user privacy.'
        },
        {
          title: 'Continuous Learning',
          description:
            'We believe in continuous learning and professional growth to stay current with the latest industry trends.'
        },
        {
          title: 'Agile Development',
          description:
            'We use Agile methodologies to deliver timely, high-quality software that meets the evolving needs of our clients.'
        }
      ],
      animationTimers: [],
      clients: []
    }
  },
  methods: {
    startAnimation(index) {
      this.animationTimers[index] = true
    },
    stopAnimation(index) {
      this.animationTimers[index] = false
    },
    onScrollToPastClients(waypointState) {
      if (waypointState.going === 'IN') {
        this.hasSlidText.pastClients = true
        this.clients = [
          {
            id: 1,
            name: 'Amtrak',
            image: 'src/assets/img/past-clients/amtrak-resize.png',
            description: 'The national passenger railroad company of the United States',
            url: 'https://www.amtrak.com/home'
          },
          {
            id: 2,
            name: 'Labcorp',
            image: 'src/assets/img/past-clients/labcorp-resize.png',
            description: 'One of the largest clinical laboratory networks in the world.',
            url: 'https://www.labcorp.com/'
          },
          {
            id: 3,
            name: 'Lockheed Martin',
            image: 'src/assets/img/past-clients/lockheedMartin-resize.png',
            description:
              'An American aerospace, arms, defense, information security, and technology corporation.',
            url: 'https://www.lockheedmartin.com/en-us/index.html'
          }
        ]
      }
    }
  },
  components: {
    Waypoint
  }
}
</script>

<style>
.slide-in-from-left {
  opacity: 1;
}
.ourValuesSlide-enter-from {
  opacity: 0;
  /* transform: scale(.06) */
  transform: translateY(-50px);
}

.ourValuesSlide-enter-to {
  opacity: 1;
  /* transform: scale(1) */
  transform: translateY(0);
}

.ourValuesSlide-enter-active {
  transition: all 2s ease;
}

.ourMissionSlide-enter-from {
  opacity: 0;
}

.ourMissionSlide-enter-to {
  opacity: 1;
}

.ourMissionSlide-enter-active {
  transition: all 3s ease;
}

.shrink-enter-from {
  opacity: 0;
}

.shrink-enter-to {
  opacity: 1;
}

.shrink-enter-active {
  transition: all 1s ease;
}

.shrink-leave-active {
  transition: all 0.5s ease;
}
.shrink-leave-to {
  transform: scale(0);
}

.pastClientsSlide-enter-from {
  opacity: 0;
  /* transform: scale(.06) */
  transform: translateY(-50px);
}

.pastClientsSlide-enter-to {
  opacity: 1;
  /* transform: scale(1) */
  transform: translateY(0);
}

.pastClientsSlide-enter-active {
  transition: all 2s ease;
}

.clients-enter-from {
  opacity: 0;
  /* transform: scale(0.6); */
  transform: translateY(150px);
}

.clients-enter-to {
  opacity: 1;
  /* transform: scale(1); */
  transform: translateY(0);
}

.clients-enter-active {
  transition: all 2s ease;
}
</style>
