<template>
    <footer class="bg-brand-dark-1 text-white py-6">
      <div class=" flex flex-col items-center md:flex-row md:justify-evenly">
        <div class="mb-4 md:mb-0 ml-4">
          Copyright ©2023 Indie Vision. All rights reserved.
        </div>
        <div class="mb-4 md:mb-0 space-x-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-brand-green-1 transition-colors"
          > Github <font-awesome-icon icon="code" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-brand-green-1 transition-colors"
          >
          LinkedIn <font-awesome-icon icon="handshake" /> 
          </a>
        </div>
        <div>
          <router-link
            :to="{ name: 'ContactUs' }"
            class=" text-white hover:text-brand-pink-1 transition-colors py-2 mr-4"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </footer>
  </template>
  
  