<template>
  <header class="flex items-center justify-between p-4 bg-brand-dark-1">
    <router-link
      :to="{ name: 'Home' }"
      class="text-2xl text-white"
      active-class="text-brand-pink-1"
    >
      <img
        class="max-w-on-mobile-logo md:max-w-none"
        src="@/assets/logo.svg"
        alt="Indie Vision Logo"
      />
    </router-link>
    <nav class="relative">
      <ul class="hidden space-x-4 md:flex">
        <li v-for="(link, index) in links" :key="index">
          <router-link
            :to="link.name"
            class="text-brand-green-1 hover:text-brand-pink-1"
            active-class="text-brand-pink-1"
            >{{ link.title }}</router-link
          >
        </li>
      </ul>
      <div class="bg-purple-400 md:hidden">
        <div class="absolute right-0 transform -translate-y-1/2 top-1/2" @click="toggleMenu">
          <span class="cursor-pointer hamburger" id="dropdown-menu"></span>
        </div>

        <ul
          class="absolute right-0 z-50 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl"
          v-show="showMenu"
        >
          <li v-for="(link, index) in links" :key="index" class="px-4 py-2 hover:bg-brand-green-1">
            <router-link
              :to="link.name"
              class="text-brand-dark-1 hover:text-brand-pink-1"
              active-class="text-brand-pink-1"
              >{{ link.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'MainNav',
  data() {
    return {
      showMenu: false,
      links: [
        { title: 'About Us', name: 'AboutUs', url: '/aboutUs' },
        { title: 'Services', name: 'OurServices', url: '/ourServices' },
        { title: 'Projects', name: 'OurProjects', url: '/ourProjects' },
        { title: 'Contact Us', name: 'ContactUs', url: '/contactUs' }
      ]
    }
  },
  watch: {
    showMenu(showMenu) {
      if (showMenu) {
        document.addEventListener('click', this.closeOutside);
      }
    }
  },
  methods: {
    closeOutside(event) {
      if (!document.getElementById('dropdown-menu').contains(event.target)) {
        this.showMenu = false;
      } else {
        this.showMenu = true
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped>
.hamburger,
.hamburger::before,
.hamburger::after {
  content: '';
  display: block;
  background: #42b883;
  height: 3px;
  width: 20px;
  transition: all 0.3s;
}

.hamburger::before,
.hamburger::after {
  position: absolute;
}

.hamburger::before {
  transform: translateY(-6px);
}

.hamburger::after {
  transform: translateY(3px);
}

.test {
  color: purple;
}
</style>
