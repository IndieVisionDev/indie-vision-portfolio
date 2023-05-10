<template>
    <footer class="py-6 text-white bg-brand-dark-1">
      <div class="flex flex-col items-center md:flex-row md:justify-evenly">
        <div class="mb-4 ml-4 md:mb-0">
          Copyright ©2023 Indie Vision. All rights reserved.
        </div>
        <div class="mb-4 space-x-4 md:mb-0">
          <a
            href="https://github.com/IndieVisionDev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white transition-colors hover:text-brand-green-1"
          > Github <font-awesome-icon icon="code" />
          </a>
          <!-- <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white transition-colors hover:text-brand-green-1"
          >
          LinkedIn <font-awesome-icon icon="handshake" /> 
          </a> -->
        </div>
        <div>
          <router-link
            :to="{ name: 'ContactUs' }"
            class="py-2 mr-4 text-white transition-colors hover:text-brand-pink-1"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </footer>
  </template>
  
  