<template>
  <div class="container px-4 py-8 mx-auto">
    <section
      class="flex flex-col items-center py-12 text-center min-h-agile-innovation-section bg-brand-grey-2"
      ref="myElement"
    >
      <Transition name="agileInnovationSlide" class="pb-12">
        <span v-if="hasSlideText.agileInnovation">
          <h2 class="text-3xl text-center text-brand-grey-1">Services Offered</h2>
          <small>Agile Innovation</small>
        </span>
      </Transition>
      <div class="flex flex-col items-center">
        <Transition name="agileInnovationImg">
          <img
            v-if="animations.agileInnovationImg"
            src="/src/assets/img/services/agile-map.png"
            alt="Image description"
            class="w-11/12 h-auto pl-6 mb-6 cursor-pointer md:pl-8 md:w-7/12 md:pb-6"
          />
        </Transition>
        <Transition name="agileContentInnovationSlideY">
          <div v-if="hasSlideText.agileContentInnovation" class="flex flex-col items-center">
            <p class="w-11/12 text-center text-brand-grey-1 md:w-8/12">
              Indie Vision boasts expertise in a diverse range of open source tools, allowing us to
              tailor solutions to meet business requirements without sacrificing quality. We keep
              you at the forefront of technological advancements by harnessing the latest and most
              innovative technologies.s.
            </p>
          </div>
        </Transition>
      </div>
    </section>
    <section class="flex flex-col items-center pt-12">
      <Transition name="technologiesWeUse">
        <span v-if="hasSlideText.technologiesWeUse" class="flex flex-col items-center text-center">
          <h2 class="pb-12 text-4xl text-brand-grey-1">Technologies We Use</h2>
          <p class="w-11/12 pb-4 md:pb-4 md:w-8/12 text-brand-grey-1">
            Our development methodologies are designed to provide time and cost savings. By
            collaborating with you, we develop solutions that maintain open and transparent
            communication throughout all stages of the development proces
          </p>
        </span>
      </Transition>
      <Waypoint @change="onScrollToCurrentTechnologies" />
      <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:pb-12">
        <div
          :class="{
            'slide-in-from-left': animations.currentTechnologies
          }"
          class="flex flex-col justify-center"
          v-for="(technology, index) in currentTechnologies"
          :key="index"
          :style="{ animationDelay: `${index * 600}ms` }"
        >
          <span class="text-white hover:text-brand-green-1">
            <h3 class="mt-4 mb-4 text-xl font-semibold text-center">
              {{ technology.name }}
            </h3>
            <div class="flex items-center justify-center">
              <div
                name="services"
                tag="div"
                class="p-4 rounded-full cursor-pointer bg-brand-grey-2 hover:bg-brand-dark-1"
              >
                <img
                  :src="technology.logo"
                  :alt="technology.name"
                  class="w-28 h-28 md:w-32 md:h-32 hover:cursor-pointer"
                  @click="openDialog(technology.name, technology.description)"
                />
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center pb-12 text-center pt-14 md:pt-8">
      <Transition name="upcomingTechnologies">
        <span v-if="hasSlideText.upcomingTechnologies" class="flex flex-col items-center">
          <h2 class="text-4xl pb-14 md:pb-14 text-brand-grey-1">Upcoming Technologies</h2>
          <p class="w-11/12 mb-4 md:pb-4 md:w-8/12 text-brand-grey-1">
            We continuously strive to stay at the forefront of technology and innovation. As part of
            our commitment to providing top-notch services to our clients, we're excited to announce
            a range of upcoming services designed to meet the ever-evolving demands of the software
            development landscape. These new offerings will complement our existing expertise,
            ensuring that we can cater to your specific requirements and deliver cutting-edge
            solutions.
          </p>
        </span>
      </Transition>
      <Waypoint @change="onScrollToUpcomingTechnologies" />
      <TransitionGroup
        tag="div"
        name="upcomingTechnologiesImgGroup"
        class="grid w-full grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 md:pb-12"
      >
        <div
          class="flex flex-col justify-center"
          v-for="(technology, index) in upcomingTechnologies"
          :key="index"
        >
          <div
            class="flex flex-col items-center justify-center text-white hover:text-brand-green-1"
          >
            <h3 class="mb-4 text-xl font-semibold text-cente">
              {{ technology.name }}
            </h3>
            <div class="p-4 rounded-full cursor-pointer bg-brand-grey-2 hover:bg-brand-grey-1">
              <img
                :src="technology.logo"
                :alt="technology.name"
                class="w-16 h-16 hover:cursor-pointer"
                @click="openDialog(technology.name, technology.description)"
              />
            </div>
          </div>
        </div> </TransitionGroup
      >
    </section>
    <div
      v-if="openedDialog"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    >
      <div class="w-4/5 max-w-lg p-8 bg-white rounded-lg">
        <button @click="openedDialog = false" class="mb-4">&#10005;</button>
        <h2 class="mb-4 text-3xl font-semibold text-brand-pink-1">{{ this.activeDialog.name }}</h2>
        <!-- <img class="mb-4" src="/path/to/image.jpg" alt="Image description" /> -->
        <p>{{ this.activeDialog.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Waypoint } from 'vue-waypoint'
export default {
  mounted() {
    this.startMountedAnimations()
    this.updateComponentWidth()
    window.addEventListener('resize', this.updateComponentWidth)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateComponentWidth)
  },
  data() {
    return {
      activeTechnology: { name: '', description: '' },
      openedDialog: false,
      componentWidth: 0,
      animations: {
        agileInnovationImg: false,
        currentTechnologies: false
      },
      hasSlideText: {
        agileInnovation: false,
        agileContentInnovation: false,
        technologiesWeUse: false,
        upcomingTechnologies: false
      },
      currentTechnologies: [
        {
          name: 'Angular',
          logo: 'src/assets/img/logos/angular.svg',
          description:
            'Angular (also referred to as Angular 2+) is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. Angular is a Single Page Application (SPA) Framework which is used for creating Fast Web Applications.'
        },
        {
          name: 'NgRx',
          logo: 'src/assets/img/logos/ngrx.svg',
          description:
            'NgRx Store provides reactive state management for Angular apps inspired by Redux. Unify the events in your application and derive state using RxJS.'
        },
        {
          name: 'RxJS',
          logo: 'src/assets/img/logos/RxJs_Logo_Basic.svg',
          description:
            'A library for composing asynchronous and event-based programs by using observable sequences.'
        },
        {
          name: 'Vue',
          logo: 'src/assets/img/logos/Vue.js_Logo_2.svg',
          description:
            ' a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex'
        },
        {
          name: 'Pinia',
          logo: 'src/assets/img/logos/pinia-logo.svg',
          description:
            'uses the new reactivity system in Vue 3 to build an intuitive and fully typed state management library. Pinia’s success can be attributed to its unique features (extensibility, store module organization, grouping of state changes, multiple stores creation, and so on) for managing stored data.'
        },
        {
          name: 'Vitest',
          logo: 'src/assets/img/logos/vitest_logo.svg',
          description: 'A blazing fast unit test framework powered by Vite.'
        },
        {
          name: 'Node',
          logo: 'src/assets/img/logos/node-js-2-svgrepo-com.svg',
          description:
            'A cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.'
        },
        {
          name: 'Express',
          logo: 'src/assets/img/logos/expressjs-icon.svg',
          description:
            'A cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.'
        },
        {
          name: 'MongoDB',
          logo: 'src/assets/img/logos/MongoDB_Logo.svg',
          description:
            'An American software company that develops and provides commercial support for the source-available database MongoDB, a NoSQL database that stores data in JSON-like documents with flexible schemas.'
        },
        {
          name: 'Mongoose',
          logo: 'src/assets/img/logos/Mongoose.svg',
          description:
            'A JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.'
        },
        {
          name: 'Firebase',
          logo: 'src/assets/img/logos/Built_with_Firebase_Logo_Dark.svg',
          description:
            'A set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node.js, Java, Unity, PHP, and C++.'
        },
        {
          name: 'Socket.IO',
          logo: 'src/assets/img/logos/socketio_logo_icon_only.svg',
          description:
            'An event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers.'
        }
      ],
      upcomingTechnologies: []
    }
  },
  computed: {
    calculateAgileContentInnovationTransition() {
      // `this` points to the component instance
      return this.componentWidth >= 768
        ? 'agileContentInnovationSlideY'
        : 'agileContentInnovationSlideY'
    }
  },
  methods: {
    openDialog(name, description) {
      this.openedDialog = true
      this.activeDialog = { name, description }
    },
    updateComponentWidth() {
      this.componentWidth = this.$el.clientWidth
    },
    onScrollToCurrentTechnologies(waypointState) {
      if (waypointState.going === 'IN') {
        this.animations.currentTechnologies = true
      }
    },
    onScrollToUpcomingTechnologies(waypointState) {
      console.log('waypointState', waypointState);
      if (waypointState.going === 'IN') {
        this.upcomingTechnologies = [
          {
            name: 'React',
            logo: 'src/assets/img/logos/icons8-react.svg',
            description:
              'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.'
          },
          {
            name: 'Flutter',
            logo: 'src/assets/img/logos/flutter.svg',
            description:
              'Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase.'
          }
        ];
      }
    },
    startMountedAnimations() {
      this.hasSlideText = {
        agileInnovation: true,
        technologiesWeUse: true,
        upcomingTechnologies: true
      }
      setTimeout(() => {
        this.hasSlideText.agileContentInnovation = true
      }, 1000)
      this.animations.agileInnovationImg = true
    }
  },
  components: {
    Waypoint
  }
}
</script>

<style scoped>
.agileInnovationSlide-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.agileInnovationSlide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.agileInnovationSlide-enter-active {
  transition: all 2s ease;
}

.agileInnovationImg-enter-from {
  opacity: 0;
  transform: scale(0.06);
}

.agileInnovationImg-enter-to {
  opacity: 1;
  transform: scale(1);
}

.agileInnovationImg-enter-active {
  transition: all 4s ease;
}

.agileContentInnovationSlideY-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.agileContentInnovationSlideY-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.agileContentInnovationSlideY-enter-active {
  transition: all 3s ease;
}

.technologiesWeUse-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.technologiesWeUse-enter-to {
  opacity: 1;
  /* transform: scale(1) */
  transform: translateY(0);
}

.technologiesWeUse-enter-active {
  transition: all 2s ease;
}

.upcomingTechnologies-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.upcomingTechnologies-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.upcomingTechnologies-enter-active {
  transition: all 2s ease;
}

.upcomingTechnologiesImgGroup-enter-from {
  opacity: 0;

  transform: translateY(50px);
}

.upcomingTechnologiesImgGroup-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.upcomingTechnologiesImgGroup-enter-active {
  transition: all 5s ease;
}
</style>
