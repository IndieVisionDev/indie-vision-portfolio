<template>
  <div class="container px-4 py-8 mx-auto">
    <section class="flex flex-col items-center py-12 text-center">
      <Transition name="projectCatalogSlide" class="pb-12">
        <span v-if="hasSlidText.projectCatalog">
          <h2 class="text-3xl text-center text-brand-grey-1 text-dark">Project Catalog</h2>
          <small>Transforming Ideas into Reality</small>
        </span>
      </Transition>
      <Transition name="projectCatalogContentSlide">
        <span v-if="hasSlidText.projectCatalogContent" class="flex flex-col items-center w-full">
          <p class="w-11/12 mb-8 text-center text-brand-grey-1 lg:max-w-3xl">
            Welcome to Indie Vision's projects page, where you can explore our diverse range of
            completed software development projects. Each project we've undertaken highlights our
            commitment to delivering outstanding solutions that cater to our client's unique needs.
          </p>

          <p class="w-11/12 mb-12 text-center text-brand-grey-1 lg:max-w-3xl">
            Our team of experienced developers and designers has worked on a variety of projects
            across multiple industries, utilizing the latest technologies and innovative approaches
            to create cutting-edge solutions that exceed expectations.
          </p>
        </span>
      </Transition>
      <div class="container w-10/12 pb-12 md:w-9/12">
        <TransitionGroup
          name="projects"
          tag="div"
          class="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <div v-for="(project, index) in projects" :key="index" class="px-8 my-4 grid-item">
            <div class="flex flex-col items-center">
              <a :href="project.url" target="blank">
                <img
                  class="mb-0 cursor-pointer md:mb-4 hover:opacity-75"
                  :src="project.imagePath"
                  :alt="project.name"
                />
              </a>
              <the-chips :chips="project.chips" class="mt-4" />
            </div>
          </div>
        </TransitionGroup>
      </div>
      <div class="w-11/12 p-6 rounded-lg md:w-8/12">
        <vue-chartjs-chart
          :chartOptions="chartOptions"
          :chartData="chartData"
          :chartStyle="chartStyle"
        />
      </div>
    </section>
  </div>
</template>

<script>
import VueChartjsChart from '@/components/Shared/charts/VueChartjsChart.vue';
import TheChips from '@/components/Shared/TheChips.vue';
import Projects from '@/assets/img/projects/projects.const';

export default {
  components: {
    VueChartjsChart,
    TheChips
  },
  mounted() {
    this.hasSlidText = {
      projectCatalog: true,
      projectCatalogContent: true
    }
    this.projects = [
      // {
      //   imagePath: Projects.JobSearch,
      //   name: 'Jobs Portal',
      //   chips: [
      //     { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
      //     { name: 'Vue', url: 'https://en.wikipedia.org/wiki/Vue.js' },
      //     { name: 'Tailwind CSS', url: 'https://en.wikipedia.org/wiki/Tailwind_CSS' },
      //     { name: 'Vitest', url: 'https://vitest.dev/' },
      //     { name: 'Pinia', url: 'https://en.wikipedia.org/wiki/Pinia' },
      //     { name: 'Rxjs', url: 'https://rxjs.dev/guide/overview' }
      //   ],
      //   url: ''
      // },
      {
        imagePath: Projects.NotTrello,
        name: 'Not Trello',
        chips: [
          { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
          { name: 'Angular', url: 'https://en.wikipedia.org/wiki/Angular_(web_framework)' },
          { name: 'Rxjs', url: 'https://rxjs.dev/guide/overview' },
          { name: 'Node', url: 'https://en.wikipedia.org/wiki/Node.js' },
          { name: 'Express', url: 'https://en.wikipedia.org/wiki/Express.js' },
          { name: 'Socket.IO', url: 'https://en.wikipedia.org/wiki/Socket.IO' },
          { name: 'MongoDB', url: 'https://en.wikipedia.org/wiki/MongoDB' },
          { name: 'Firebase', url: 'https://en.wikipedia.org/wiki/Firebase' }
        ],
        url: 'https://cstrello-client.firebaseapp.com'
      },
      {
        imagePath: Projects.LetterInvasion,
        name: 'Letter Invasion',
        chips: [
          { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
          { name: 'Rxjs', url: 'https://rxjs.dev/guide/overview' }
        ],
        url: 'https://alien-invasions.firebaseapp.com/'
      },
      {
        imagePath: Projects.TickTacToe,
        name: 'TickTac Toe',
        chips: [{ name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' }],
        url: 'https://codepen.io/GrantKnaver/full/RpqGpM/'
      },
      {
        imagePath: Projects.RBook,
        name: 'Recipe Book',
        chips: [
          { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
          { name: 'Angular', url: 'https://en.wikipedia.org/wiki/Angular_(web_framework)' },
          { name: 'Node', url: 'https://en.wikipedia.org/wiki/Node.js' },
          { name: 'MongoDB', url: 'https://en.wikipedia.org/wiki/MongoDB' },
          { name: 'Mongoose', url: 'https://en.wikipedia.org/wiki/Mongoose_(MongoDB)' },
          { name: 'Express', url: 'https://en.wikipedia.org/wiki/Express.js' },
          { name: 'Firebase', url: 'https://en.wikipedia.org/wiki/Firebase' },
          { name: 'Rxjs', url: 'https://rxjs.dev/guide/overview' }
        ],
        url: 'https://recipebook-77068.firebaseapp.com/'
      },
      {
        imagePath: Projects.AngularAnimations,
        name: 'Angular Animatorn',
        chips: [
          { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
          { name: 'Angular Animations', url: 'https://angular.io/guide/animations' }
        ],
        url: 'https://animations-1be9d.firebaseapp.com/'
      },
      {
        imagePath: Projects.Simon,
        name: 'Simon',
        chips: [
          { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
          { name: 'SCSS', url: 'https://en.wikipedia.org/wiki/Sass_(style_sheet_language)' }
        ],
        url: 'https://codepen.io/GrantKnaver/full/OpYYjx',
      }
    ]
  },
  data() {
    return {
      hasSlidText: {
        projectCatalog: false,
        projectCatalogContent: false
      },
      chartOptions: {
        animation: {
          duration: 4000, // Duration of the animation in milliseconds
          easing: 'easeOutBounce' // Easing function to use (default is 'easeOutBounce')
        },
        scales: {
          y: {
            min: 0,
            max: 8
          }
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: '#D91616'
            }
          },
          title: {
            display: true,
            text: 'Projects Use What Technologies',
            color: '#E15A97',
            font: {
              size: 20
            },
            padding: {
              bottom: 40
            }
          },
          tooltip: {
            displayColors: false,
            titleFontColor: '#4C754B',
            callbacks: {
              label: function (context) {
                return `${context.formattedValue} Projects`
              }
            }
          }
        }
      },
      chartData: {
        labels: [
          'JavaScript',
          'Angular',
          'NgRx',
          'Vue',
          'Pinia',
          'Node',
          'MongoDB',
          'Firebase',
          'Socket.IO',
          'RxJS'
        ],
        datasets: [
          {
            backgroundColor: [
              'rgba(66, 184, 131, 0.5)',
              'rgba(225, 90, 151, 0.5)',
              'rgba(75, 85, 99, 0.5)'
            ],
            data: [6, 3, 1, 1, 1, 2, 2, 2, 1, 5]
          }
        ]
      },
      chartStyle: {
        maxHeight: '500px',
        height: '500px', // default height
        width: '100%'
      },
      projects: []
    }
  }
}
</script>

<style scoped>
.projectCatalogSlide-enter-from {
  opacity: 0;
  /* transform: scale(.06) */
  transform: translateY(-50px);
}

.projectCatalogSlide-enter-to {
  opacity: 1;
  /* transform: scale(1) */
  transform: translateY(0);
}

.projectCatalogSlide-enter-active {
  transition: all 2s ease;
}

.projectCatalogContentSlide-enter-from {
  opacity: 0;
}

.projectCatalogContentSlide-enter-to {
  opacity: 1;
}

.projectCatalogContentSlide-enter-active {
  transition: all 3s ease;
}

.projects-enter-from {
  opacity: 0;
  /* transform: scale(0.6); */
  transform: translateY(150px);
}

.projects-enter-to {
  opacity: 1;
  /* transform: scale(1); */
  transform: translateY(0);
}

.projects-enter-active {
  transition: all 2s ease;
}
</style>
